import React from 'react';
import SearchIndexItem from './search_index_item';

export default ({searchItems}) => (
  <ul>
    {searchItems.map(
      (item) => (<SearchIndexItem item={item} key={item.id}/>)
    )}
  </ul>
);
