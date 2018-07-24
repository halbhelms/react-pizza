import React from 'react';
import Card from './contents/Card.jsx';
import MonthlySpecial from './contents/MonthlySpecial.jsx';

class Contents extends React.Component {

  card1 = {
    imageUrl: 'pizza-delivery.jpg',
    text: [
      "We get it. You're trying to run your family business. But rivals get in the way. And it's not like the old days when you could call a meeting of the Five Families and then ambush them. <em>The Godfather</em> killed that strategy.",
      "We got a solution: Wise Guides Pizza delivery. You call us. We show up a their place. Hey &mdash; who's gonna say no to pizza? Only this pizza comes with a side...<em>of red sauce</em>."
    ]
  };

  card2 = {
    imageUrl: 'cheese-pizza-01.jpg',
    text: [
      "You're thinkin': Who cares what it tastes like? It ain't about the pizza but the <em>delivery</em>.",
      "You're right. You're right. But you're gonna send your clean-up crew, right? And they're gonna be hungry, right? So who says you can't kill two birds with one stone, so to speak?"
    ]
  };

  special = {
    title: "The Anthony 'Astagmatism' Fanucci Memorial Package",
    text: [
      "Anthony was one of our best 'delivery men'. We knew his eyesight wasn't too good, but we was shocked and saddened by his accidental death owin' to a confusion over which was the business end of a .45.",
      "To celebrate Anthony's work, this month we offer a special package that includes:<ul><li>2 ea. family size pies</li><li>2 ea. 2-liter bottles of the soft drink of your choice</li><li>1 ea. dessert pie</li><li>Special 'No Survivors' guarantee</li><li>Special edition of Anthony's classic work: <em>How to Make It Look Like an Accident</em></li></ul>",
      "Call us at 800.WISEGUIDES to discuss details and pricing."
    ]
  }

  render() {

    return (
      <main>
        <h2>Pizza Delivery &mdash; to Die For...</h2>
        <Card imageUrl={this.card1.imageUrl} text={this.card1.text} position="left" />
        <hr />
        <h2>And the Pizza Ain't Bad Either</h2>
        <Card imageUrl={this.card2.imageUrl} text={this.card2.text} position="right" />
        <hr />
        <MonthlySpecial title={this.special.title} text={this.special.text} />
         <footer>&copy; 2018 Wise Guides Pizzeria and Waste Removal</footer>
      </main>
    );
  }
}

export default Contents;