// Dashboard.jsx
import React from 'react';
import NewItem from './NewItem ';

interface DashboardProps {
  items: Array<{ id: number; title: string; description: string }>;
}

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <div key={item.id} className="xl:w-1/3 md:w-1/2 p-4">
              <NewItem title={item.title} description={item.description} />
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>
  );
};

export default Dashboard;
