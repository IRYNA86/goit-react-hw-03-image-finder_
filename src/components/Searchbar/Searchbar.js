import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    nameImages: '',
  };

  handleNameChange = event => {
    this.setState({ nameImages: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.nameImages.trim() === '') {
      toast.error('Enter the name in the search bar');
    }
    this.props.onSubmit(this.state.nameImages);
    this.setState({ nameImages: '' });
    return;
  };

  render() {
    return (
      <header className={s.searchForm}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchForm_button}>
            <span class="button-label">Search</span>
          </button>
          
          <input
            className={s.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.nameImages}
            onChange={this.handleNameChange}
          />
          
        </form>
      </header>
    );
  }
}

export default Searchbar;
