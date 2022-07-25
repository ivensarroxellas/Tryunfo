import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="name-inpu">
          Nome
          <input
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <select name="Tipo de carta" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="superFrunfo"
            value="Super Trunfo"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
