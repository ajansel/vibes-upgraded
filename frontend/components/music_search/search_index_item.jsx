import React from 'react';

export default ({item}) => {
  if (item.type === 'artist'){
    return <li>{item.name}</li>;
  } else {
    return <li>{item.title}</li>;
  }
};
