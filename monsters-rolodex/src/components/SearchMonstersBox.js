// import React, { useState } from 'react';

const SearchMonstersBox = (props) => {
  console.log(props);

  const { onChange } = props;

  return (
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={onChange}
      />
    );
}

export default SearchMonstersBox;