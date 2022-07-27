import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CSS components/Form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <label htmlFor="nameInput">
          Nome
          <input
            id="nameInput"
            name="cardName"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição
          <input
            id="descriptionInput"
            name="cardDescription"
            data-testid="description-input"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            id="attr1"
            name="cardAttr1"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            id="arrt2"
            name="cardAttr2"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            id="arrt3"
            name="cardAttr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageInput">
          Imagem
          <input
            id="imageInput"
            name="cardImage"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <select
          id="selectcardType"
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
          <label htmlFor="checkIfTrunfo">
            Super Trunfo
            <input
              id="checkIfTrunfo"
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>) }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
