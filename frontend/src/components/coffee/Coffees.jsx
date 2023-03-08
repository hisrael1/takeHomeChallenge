import React from 'react';
import './Coffees.css';
import CoffeesItem from './CoffeesItem';
import axios from 'axios';

class Coffees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coffees: []}
    }

    componentDidMount() {
        axios.get('/api/coffee')
            .then(coffees => {
                console.log(coffees.data);
                this.setState({ coffees: coffees.data });
                })
            .catch(err => console.log(err));
    }

    render() {
        const coffeesData = this.state.coffees;
        return (
            <div className="coffees-container">
                <h3 className="coffees-header"> 
                    Coffees 
                </h3>
                {coffeesData.map((coffee) => (
                    <CoffeesItem key={coffee._id} name={coffee.name} year={coffee.year} />
                ))}
            </div>            
        )
    }
}

export default Coffees;
