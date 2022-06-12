import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery'

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
  };
  async componentDidMount() {
    const response = await axios.get("/?key=4823621-792051e21e56534e6ae2e472f&q=dog&page=1&per_page=20");
    this.setState({ images: response.data.hits });

  }
  
render(){
  const { images } = this.state;
  return (
        <div
    >
      <Searchbar/>
      {images.length > 0 ? <ImageGallery images={images}/> : null}
    </div>
  )}
};

export default App;