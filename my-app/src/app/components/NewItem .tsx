import React from "react";
import SmallPicture from "./SmallPicture";

interface NewItemProps{
  author: string;
  title: string;
}

const NewItem: React.FC<NewItemProps> = ({author, title}) => {
  return (
    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
        <SmallPicture />
      </div>
      <h2 className="text-lg text-white font-medium title-font mb-2">{author}</h2>
      <p className="leading-relaxed text-base">{title}</p>
    </div>
  );
};


export default NewItem;