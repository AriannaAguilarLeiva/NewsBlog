import React from "react";
import SmallPicture from "./SmallPicture";

interface NewItemProps{
  title: string;
  content: string;
}

const NewItem: React.FC<NewItemProps> = ({title, content}) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">

        <SmallPicture></SmallPicture>

        </div>
        <h2 className="text-lg text-white font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base">{content}</p>
      </div>
    </div>
  );
};

export default NewItem;