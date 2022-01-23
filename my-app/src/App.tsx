import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUploading, { ImageListType } from "react-images-uploading";

function App() {

  const [images, setImages] = React.useState([]);
  const maxNumber = 3;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages([imageList[imageList.length - 1]] as never[]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList[imageList.length - 1] &&
              <div className="image-item">
                <><img src={imageList[imageList.length - 1].dataURL} alt="" width="100" /><div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(imageList.length - 1)}>Update</button>
                  <button onClick={() => onImageRemove(imageList.length - 1)}>Remove</button>
                </div></>
              </div>
            }
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default App;
