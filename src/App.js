import React, { Component } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
import employees from "./data/employees.json";

class App extends Component {
    state = {
        searchTerm: '',
        sorted: false,
        employees,
    }

    handleSearchTerm = (event) => {
        event.preventDefault();
        this.setState( {
            searchTerm: event.target.value,
        })
    }

    handleSortByName = (event) => {
        event.preventDefault();
        // sort array ascending alphabetical
        const sortedEmployees = this.state.employees.sort((a,b) => (a.name > b.name) ? 1 : -1);

        this.setState({
            employees: sortedEmployees
        })
    }

    handleSortByDept = (event) => {
        event.preventDefault();
        // sort array ascending alphabetical
        const sortedEmployees = this.state.employees.sort((a,b) => (a.department > b.department) ? 1 : -1);

        this.setState({
            employees: sortedEmployees
        })
    }

    render() {
        // the filteredEmployees variable only stores employee names that start with with the matching string you type
        const filteredEmployees = this.state.employees.filter(employee => employee.name.toLowerCase().startsWith(this.state.searchTerm));
        console.log(this.state.searchTerm);
        return (
            <div>
                <Header />
                <Layout>
                    <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                    <p>Search for an employee or arrange by category.</p>
                    {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                    <Navigation
                        onSearch={this.handleSearchTerm}
                        searchTerm={this.state.searchTerm}
                        handleSortByName={this.handleSortByName}
                        handleSortByDept={this.handleSortByDept}
                    />
                    {/* the employees array gets the filteredEmployees data via the data prop */}
                    <EmployeeCardList data={filteredEmployees} />
                    <Footer />
                </Layout>
            </div>
        );
    }
}

export default App;
