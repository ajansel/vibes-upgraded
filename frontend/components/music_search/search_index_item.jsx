import React from 'react';

export default ({item}) => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("Hello there. Your search is working!");
    // Add logic for pop up modole when working
  };

  if (item.type === 'artist'){
    return <li onClick={handleClick}>{item.name}</li>;
  } else {
    return <li onClick={handleClick}>{item.title}</li>;
  }
};
