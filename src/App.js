import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <SearchBar setSearchTerm={setSearchTerm} setImageUrls={setImageUrls} imageUrls={imageUrls} />
    <div style={{flexDirection:"row",display:"flex"}}>
    {imageUrls.length !== 0 ? <ImageList imgList={imageUrls} /> : <></>}
    </div>
    </div>
  );
};

export default App;
