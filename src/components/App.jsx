import React, { Component } from 'react';
import axios from 'axios';

// const apiKey = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';


// export const apiGallery = async (nextName) => {
  
   
//     const response = await axios.get(
//         `/?key=${apiKey}&q=${nextName}&page=1&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         return response.data;
// }

const Searchbar = () => (
  <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

const ImageGallery = ({images}) => (
    <ul class="gallery">
        {images.map(image => (
  <li class="gallery-item" key={image.id}>
  <img src={image.webformatURL} alt="" />
</li>))}
</ul>
)

class App extends Component {
  state = {
    images: [],
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
      <ImageGallery images={images}/>
    </div>
  )}
};

export default App;