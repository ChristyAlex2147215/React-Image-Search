import React from 'react'

const ImageShow = ({url}) => {
  return (
    <div className='imgComp'>
      <img src={url} alt='' style={{width:200,height:200}}/>
    </div>
  )
}

export default ImageShow