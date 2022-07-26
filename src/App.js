import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
  }

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

  handleChange = (event) => {
    this.setState(() => ({ [event.target.name]: event.target.value }),
      this.handledButton);
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
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
      </>
    );
  }
}

export default App;
