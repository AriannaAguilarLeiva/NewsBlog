import React from "react";
import NewItem from "./NewItem ";

const Dashboard = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Las últimas 12 noticias</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Las mejores noticias en Costa Rica</p>
        </div>
        <div className="flex flex-wrap -m-4"> 
          
          <NewItem title="Título 1" content="Contenido 1"/>
          <NewItem title="Título 2" content="Contenido 2"/>
          <NewItem title="Título 3" content="Contenido 3"/>
          <NewItem title="Título 4" content="Contenido 4"/>
          <NewItem title="Título 5" content="Contenido 5"/>
          <NewItem title="Título 6" content="Contenido 6"/>

        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>

  );
};

export default Dashboard;