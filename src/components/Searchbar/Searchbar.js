import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        nameImages: '',
    }

    render() {
        return (
            <header class="searchbar">
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>
  
      <input
        class="input"
        type="text"
        autoComplete="off"
        autoFocus
                placeholder="Search images and photos"
      />
    </form>
  </header>
        )
        
    }
    
}
    
  export default Searchbar