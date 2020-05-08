import React, { Component } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Layout>

                    <h1 className="font-black text-lg text-gray-800 mt-16">Employee Directory</h1>

                    <p>Search for an employee or arrange by category.</p>

                    <Navigation />

                    <EmployeeCardList />

                </Layout>
            </div>
        );
    }
}

export default App;
