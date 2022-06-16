import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import mapper from '../service/mapper.js';
import Modal from './Modal/Modal';
import Button from './Button/Button';

const API_KEY = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';

let totalHits = 0;
let sumHits = 0;

class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    nameImages: '',
    isLoading: false,
    error: null,
    showModal: false,
    bigImage: '',
  };

  async componentDidMount() {
    const { nameImages, page, per_page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        `/?key=${API_KEY}&q=${nameImages}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
      );
      this.setState({ images: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { nameImages, page, per_page } = this.state;
    if (prevState.page !== page || prevState.nameImages !== nameImages) {
      try {
        this.setState({ isLoading: true });
        const images = await axios.get(
          `/?key=${API_KEY}&q=${nameImages}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
        );

        const imagesData = mapper(images.data.hits);
        if (images.data.hits.length === 0) {
          this.setState({ isLoading: false });
          toast.error('There are no images matching your search query');
          return;
        }
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...imagesData],
            isLoading: false,
          };
        });
        totalHits = images.totalHits;
        sumHits += images.data.hits.length;
      } catch (error) {
        console.log(error);
        this.setState({ error: true, isLoading: false });
      }
    }
  }

  handleFormSubmit = queryValue => {
    this.setState({
      images: [],
      isLoading: false,
      page: 1,
      nameImages: queryValue,
    });
    sumHits = 0;
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  openImage = event => {
    this.toggleModal();
    this.setState({ bigImage: event });
  };
  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.scrollWindow();
  };
  scrollWindow = () => {
    scroll.scrollToBottom({
      offset: 100,
      smooth: true,
    });
  };
  render() {
    const { images, isLoading, error, nameImages, showModal, bigImage } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ImageGallery
            images={images}
            nameImages={nameImages}
            onClick={this.openImage}
          />
        )}
        <ToastContainer position="top-right" autoClose={3000} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {' '}
            <img src={bigImage} alt="" />{' '}
          </Modal>
        )}
        {totalHits !== sumHits && images.length > 0 && (
          <Button nextPage={this.nextPage} />
        )}
      </div>
    );
  }
}

export default App;
