import React, { useState } from 'react';
import SearchImages from '../api';

const SearchBar = ({ setSearchTerm, setImageUrls, imageUrls }) => {
  const [term, setTerm] = useState('');

  const inputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSearch = async () => {
    setSearchTerm(term);
    const newImageUrls = await SearchImages(term); // Assuming SearchImages returns an array of URLs
    console.log("number of images obtained",newImageUrls.length);
    setImageUrls(newImageUrls); // Update the imageUrls directly with the new search result
  };

  return (
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightgreen",width:"40%",height:"40px",justifySelf:"center",margin:''}}>
      <input type="text" name="search" placeholder="Search Name" onChange={inputChange} style={{width:"100%"}}/>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
