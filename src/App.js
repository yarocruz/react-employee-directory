import React from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Header />
      <Layout>
          <h1 className="font-black text-lg text-gray-800 mt-16">Employee Directory</h1>
          <p>Search for an employee or arrange by category.</p>

          <Navigation />

          <header>
              <p className="text-6xl">Hello from React bitches!</p>
              <img className="rounded-full" src="https://randomuser.me/api/portraits/women/90.jpg" alt="employee"/>
          </header>
      </Layout>
    </div>
  );
}

export default App;
