import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImages } from '../service/API.js';

class App extends Component {
  state = {
    images: [],
    nameImages: '',
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const { nameImages } = this.state;
    this.setState({ isLoading: true });

    try {
      const images = getImages(nameImages);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevState.nameImages;
  //   const nameImages = this.state.nameImages;
  //   if (prevName !== nameImages) {
  //     console.log('Изменилось имя');
  //     fetch(getImages(nameImages))
  //       .then(res => res.json())
  //       .then(images => this.setState(images.data.hits));
  //   }
  // }
  handleFormSubmit = nameImages => {
    this.setState({ nameImages });
  };

  render() {
    const { images, isLoading, error, nameImages } = this.state;
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
