import React from "react";

export interface Props {
  images: string[];
}

export const ImageGallery: React.SFC<Props> = ({ images }) => (
  <div>
    {images.map(image => (
      <img key={image} src={image} />
    ))}
  </div>
);
