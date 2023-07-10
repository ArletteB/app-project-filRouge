import React from "react";
import IndividualImage from "./IndividualImage";

const Images = ({ images }: any) => {
  //   console.log(images);
  return (
    <div className="images">
      <div className="images__container">
        {images.map((image: { id: any }) => (
          <IndividualImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Images;
