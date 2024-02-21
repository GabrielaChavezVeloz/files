import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  console.log(classes);
  
  const x = 'test';
  console.log(x);
  return <div className={classes}>{props.children}</div>;
};

export default Card;
