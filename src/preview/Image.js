import React, { Component } from 'react';

import homeIcon from '../res/home.svg';

import './Image.css';

class Image extends Component {
  htmlElement = null;
  bodyElement = null;
  scrollTop = 0;

  state = {
    open: false,
  };

  constructor() {
    super();
    this.htmlElement = document.querySelector('html');
    this.bodyElement = document.querySelector('body');
  }

  enablePreview = () => {
    this.setState({
      open: true,
    });
    /* Hack for preventing scrolling while modal is open, but show scrollbar (works in Chrome & Edge) */
    this.scrollTop = this.htmlElement.scrollTop || this.bodyElement.scrollTop;
    this.htmlElement.className = 'noscroll';
    this.htmlElement.style.top = `-${this.scrollTop}px`;
  };

  disablePreview = event => {
    if (
      this.props.info.link &&
      event.target &&
      event.target.className.indexOf('modalWrapper') === -1
    )
      return true;
    this.setState({
      open: false,
    });
    this.htmlElement.className = '';
    window.scrollTo(0, this.scrollTop);
    return false;
  };

  componentWillUnmount() {
    /* Remove settings if closing modal by clicking on nav link */
    this.htmlElement.className = '';
  }

  render() {
    return (
      <div className="imageContainer">
        <a tabIndex={0} onClick={this.enablePreview} className="previewImg">
          <img alt="Project Preview" src={this.props.info.image} />
        </a>
        <div
          className={`modalWrapper ${this.state.open ? 'open' : 'hidden'}`}
          onClick={this.disablePreview}
        >
          <div className="table-wrapper">
            <a
              href={this.props.info.link}
              target="_blank"
              rel="noopener"
              className="linked-image"
            >
              <img
                className="image"
                alt="Project Preview"
                src={this.props.info.image}
              />
              <div
                className={`invitation ${this.props.info.link ? '' : 'hidden'}`}
              >
                <img alt="Project Page" src={homeIcon} />
                Visit the project!
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
