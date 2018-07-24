import React from 'react';
import Parser from 'html-react-parser';

class MonthlySpecial extends React.Component {

  prepareText = () => {
    let text = ``;
    this.props.text.forEach ( (p) => {
      text += `<p>${p}</p>`
    });
    return text;
  }

  render() {
    return (
      <section class="special">
        <h3>Monthly Special</h3>
        <h4>{Parser(this.props.title)}</h4>
        <p>{Parser(this.prepareText())}</p>
      </section>
    );
  }
}

export default MonthlySpecial;