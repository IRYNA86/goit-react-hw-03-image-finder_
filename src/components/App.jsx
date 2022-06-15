import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import mapper from '../service/mapper.js'


const API_KEY = '25251210-ac1999c1ffdbc1fb6fbdee37e';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    nameImages: '',
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const {nameImages, page, per_page} = this.state
        this.setState({ isLoading: true });
    try {
      const response  = await axios.get(`/?key=${API_KEY}&q=${nameImages}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
      this.setState({images: response.data.hits });
      console.log(response)
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState){
    const {nameImages, page, per_page} = this.state
    if(prevState.nameImages !== nameImages){
    try{
      this.setState({ isLoading: true });
      const images = await axios.get(`/?key=${API_KEY}&q=${nameImages}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
      console.log(images)
      const imagesData = mapper(images.data.hits);
      console.log(imagesData)
      this.setState(prevState  => {
        return {
        images: [...prevState.images, ...imagesData],
        isLoading: false,
      }})
    }
   catch(error){
    this.setState({error: true, isLoading: false})
   }}
  };

  handleFormSubmit = queryValue => {
    this.setState({ images: [],
      isLoading: false,
      page: 1,
      nameImages: queryValue, });
  };

  render() {
    const { images, isLoading, error, nameImages } = this.state;
    console.log(images)
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ImageGallery images={images} nameImages={nameImages} />
        )}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }
}

export default App;
