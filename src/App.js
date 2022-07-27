import React from 'react';
import Card from './components/Card';
import DeckExposed from './components/DeckExposed';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state ={
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardDeck: [],
    hasTrunfo: false,
  }

  handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked
      : event.target.value;
    this.setState(() => ({ [event.target.name]: value }),
      this.handledButton);
  };

  handledButton = () => {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const maxAttrTotal = 210;
    const maxAttrUnt = 90;

    const checkVoid = !cardName || !cardDescription || !cardImage
    || !cardAttr1 || !cardAttr2 || !cardAttr3;

    const checkNegative = parseInt(cardAttr1, 10) < 0 || parseInt(cardAttr2, 10) < 0
    || parseInt(cardAttr3, 10) < 0;

    const checkLessThan210 = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) > maxAttrTotal;

    const checkUnitLessThan90 = parseInt(cardAttr1, 10) > maxAttrUnt
    || parseInt(cardAttr2, 10) > maxAttrUnt || parseInt(cardAttr3, 10) > maxAttrUnt;

    const button = checkVoid || checkNegative || checkLessThan210 || checkUnitLessThan90;

    this.setState({
      isSaveButtonDisabled: !!button,
    });
  }

  onSaveButtonClick =() => {
    this.setState((prevState) => ({
      cardDeck: [...prevState.cardDeck, prevState],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    }), this.trunfoValidation);
  }

  trunfoValidation = () => {
    const { cardDeck } = this.state;
    const trunfoValidationReturn = cardDeck.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfoValidationReturn });
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, cardDeck } = this.state;
    return (
      <>
        <h1 className="titulo">Tryunfo</h1>
        <section>

          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <DeckExposed
          cardDeck={ cardDeck }
        />
      </>
    );
  }
}

export default App;
