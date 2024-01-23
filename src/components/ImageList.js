import React from "react";
import ImageCard from "./ImageCard";
import "./style.css";

const ImageList = ({ images }) => {
  const imagesReturn = images.map((image) => {
    return (
      <ImageCard
        url={image.urls.regular}
        alt={image.alt_description}
        key={image.id}
      />
    );
  });

  return <div className="images">{imagesReturn}</div>;
};
// export this
export default ImageList;
