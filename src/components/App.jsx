import React, { Component } from 'react';
import axios from 'axios';
const apiKey = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const apiGallery = async (nextName) => {
  
   
    const response = await axios.get(
        `/?key=${apiKey}&q=${nextName}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
        return response.data;
}

class App extends Component {

render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  )}
};

export default App;