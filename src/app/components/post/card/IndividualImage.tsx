import React from "react";

const IndividualImage = ({ image }: any) => {
  return (
    <div className="image">
      <img src={image.urls.small} alt="" />
    </div>
  );
};

export default IndividualImage;
