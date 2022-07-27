import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

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
      <div data-testid="missions">
        <div>Minhas Cartas</div>
        {allCreatedCards}
      </div>
    );
  }
}

DeckExposed.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckExposed;
