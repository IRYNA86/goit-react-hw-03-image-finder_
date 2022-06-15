import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Api from '../service/Api'

// const apiKey = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';

// export const apiGallery = async (nextName) => {

//     const response = await axios.get(
//         `/?key=${apiKey}&q=${nextName}&page=1&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         return response.data;
// }

class App extends Component {
  state = {
    images: [],
    nameImages: '',
    isLoading: false,
    error: null,
  };
  // async componentDidMount(nameImages) {
    // const images = Api.apiGallery("nameImages");
  //   this.setState({ isLoading: true });
  //   try {
  //     const response = await axios.get(
  //       `/?key=4823621-792051e21e56534e6ae2e472f&q=${nameImages}&page=1&per_page=3`
  //     );
  //     this.setState({ images: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

async componentDidMount(nameImages) {
    
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        '/?key=4823621-792051e21e56534e6ae2e472f&q=cat&page=1&per_page=3'
      );
      this.setState({ images: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.nameImages !== this.state.nameImages){
  //     fetch(
  //       `/?key=4823621-792051e21e56534e6ae2e472f&q=${this.state.nameImages}&page=1&per_page=3`
  //     )
  //     console.log('prevState.nameImages:', prevState.nameImages)
  //     console.log('this.state.nameImages:', this.state.nameImages)
  //     console.log('заменилось')
  //   }
  // }

  handleFormSubmit = nameImages => {
    this.setState({nameImages})
  }

  render() {
    const { images, isLoading, error, nameImages } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading ? <p>Loading...</p> : <ImageGallery images={images} nameImages={nameImages} />}
        <ToastContainer position="top-right"
autoClose={3000}/>
      </div>
    );
  }
}

export default App;
