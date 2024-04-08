import React from "react";
import SmallPicture from "./SmallPicture";

interface NewItemProps {
  author: string;
  title: string;
  urlToImage: string;
}

const NewItem: React.FC<NewItemProps> = ({ author, title, urlToImage }) => {
  return (
    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg flex items-start">
      <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
        <SmallPicture urlToImage={urlToImage} />
      </div>
      <div className="ml-4">
        <h2 className="text-lg text-white font-medium title-font mb-2">{author}</h2>
        <p className="leading-relaxed text-base text-gray-300">{title}</p>
      </div>
    </div>
  );
};


export default NewItem;