import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  const cards = CARD_DATA.cards.map((card) => {
    return (
    <Card text={card.text} emoji={card.emoji} />
    );
  });


  
  return (
    <div>
      {cards}
    </div>)

};

Board.propTypes = {
// url: PropTypes.string.isRequired,
// boardName: PropTypes.string.isRequired
};

export default Board;