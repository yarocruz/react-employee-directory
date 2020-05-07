import React from 'react';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <header>
       <p className="text-6xl">Hello from React bitches!</p>
        <img className="rounded-full" src="https://randomuser.me/api/portraits/women/90.jpg" alt="employee"/>
      </header>
    </div>
  );
}

export default App;
