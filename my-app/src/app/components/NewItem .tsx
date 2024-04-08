// NewItem.jsx
import React from 'react';
import SmallPicture from './SmallPicture';

interface NewItemProps {
  title: string;
  description: string;
}

const NewItem: React.FC<NewItemProps> = ({ title, description }) => {
  return (
    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <h2 className="text-lg text-white font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
      <SmallPicture />
    </div>
  );
};

export default NewItem;
