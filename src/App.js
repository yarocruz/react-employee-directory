import React, { useState } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
//import employees from "./data/employees.json";
import API from "./utils/API";

<<<<<<< HEAD
class App extends Component {
    state = {
        searchTerm: '',
        sorted: false,
        employees: []
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        API.getUsers()
            .then(response => {
                console.log(response.data.results)
                this.setState({ employees: response.data.results })
            })
            .catch(err => console.log(err))
    }
=======
function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);
>>>>>>> 7b3ef87756ec4e4eafac80f07a45781fbd982e12

    function handleSearchTerm(event)  {
        event.preventDefault();
        setSearchTerm(event.target.value)
    }

    function handleSortByName(event) {
        event.preventDefault();
        // sort array ascending or descending by first name
<<<<<<< HEAD
        if (!this.state.sorted) {
            this.setState({
                employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1),
                sorted: true
            })
        } else {
            this.setState({
                employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1),
                sorted: false
            })
        }
    }

    // handleSortByDept = (event) => {
    //     event.preventDefault();
    //     // sort array ascending or descending by dept name
    //     if (!this.state.sorted) {
    //         this.setState({
    //             employees: this.state.employees.sort((a, b) => (a.department > b.department) ? 1 : -1),
    //             sorted: true
    //         })
    //     } else {
    //         this.setState({
    //             employees: this.state.employees.sort((a, b) => (a.department > b.department) ? -1 : 1),
    //             sorted: false
    //         })
    //     }
    // }

    render() {
        // the filteredEmployees variable only stores employee names that start with with the matching string you type
        const filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(this.state.searchTerm));
        return (
            <div>
                <Header/>
                <Layout>
                    <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                    <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
                    {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                    <Navigation
                        onSearch={this.handleSearchTerm}
                        searchTerm={this.state.searchTerm}
                        handleSortByName={this.handleSortByName}
                        handleSortByDept={this.handleSortByDept}
                    />
                    {/* the employees array gets the filteredEmployees data via the data prop */}
                    <EmployeeCardList data={filteredEmployees}/>
                    <Footer/>
                </Layout>
            </div>
        );
    }
=======
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortByDept(event) {
        event.preventDefault();
        // sort array ascending or descending by dept name
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? -11 : 1));
            setSorted(false);
        }
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Layout>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeCardList data={filteredEmployees}/>
                <Footer/>
            </Layout>
        </div>
    )
>>>>>>> 7b3ef87756ec4e4eafac80f07a45781fbd982e12
}

export default App;
