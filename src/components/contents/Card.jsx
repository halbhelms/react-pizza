import React from 'react';
import Parser from 'html-react-parser';

class Card extends React.Component {

  prepareText = () => {
    let text = ``;
    this.props.text.forEach ( (p) => {
      text += `<p>${p}</p>`
    });
    return text;
  }

  render() {
    // assume left position
    let contents = `<img src='./assets/images/${this.props.imageUrl}' width=320 /><p>${this.prepareText()}</p>`;
    // but if it's right
    if (this.props.position === "right") {
      contents = `<p>${this.prepareText()}</p><img src='./assets/images/${this.props.imageUrl}' width=320 />`;
    }
    return (
      <React.Fragment>
        <section class="card">
          <div class="lowdown">
            {Parser(contents)}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;