import React from "react";
interface SmallPictureProps {
  urlToImage: string;
}

const SmallPicture: React.FC<SmallPictureProps> = ({ urlToImage }) => {
  return (
    <img src={urlToImage} alt="" className="w-full h-full object-cover" />
  );
};

export default SmallPicture;