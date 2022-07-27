import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CSS components/DeckExposed.css';

class DeckExposed extends Component {
  render() {
    const { cardDeck } = this.props;
    const allCreatedCards = cardDeck.map((unitCard, index) => (
      <Card
        key={ index }
        cardName={ unitCard.cardName }
        cardDescription={ unitCard.cardDescription }
        cardImage={ unitCard.cardImage }
        cardAttr1={ unitCard.cardAttr1 }
        cardAttr2={ unitCard.cardAttr2 }
        cardAttr3={ unitCard.cardAttr3 }
        cardRare={ unitCard.cardRare }
        cardTrunfo={ unitCard.cardTrunfo }
      />));
    return (
      <div className="deck">
        <h1>Minhas Cartas</h1>
        {allCreatedCards}
      </div>
    );
  }
}

DeckExposed.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckExposed;
