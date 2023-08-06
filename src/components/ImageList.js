import React from 'react';
import ImageShow from './ImageShow';
import "./ImageList.css"

const ImageList = ({ imgList }) => {
  console.log('image list initially', imgList);
  console.log('image list initial length', imgList.length);
  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap: 'wrap',justifyContent: 'center'}} className='imgContain'>
      {imgList.map((image, index) => (
        <ImageShow url={image} key={index} />
      ))}
    </div>
  );
};

export default ImageList;
