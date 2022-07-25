import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <>
        <h1 data-testid="name-card">{cardName}</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
      </>
    );
  }
}

export default Card;
