import React from 'react';
import axios from 'axios';

class CreateCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: null,
            caffeineContent: null,
            caffeinePercentage: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const name = e.target.id;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        axios.post('api/coffee/create', {
            name: this.state.name,
            year: parseInt(this.state.year),
            caffeineContent: parseInt(this.state.caffeineContent),
            caffeinePercentage: parseInt(this.state.caffeinePercentage)
        })
        .then(() => console.log('success'))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="create-coffee-container">
                New Coffee
                <div className="create-coffee-input-container">
                    <label htmlFor="name"> Name: </label>
                    <input id='name' type='text' className='create-coffee-input' onChange={this.handleChange}/> 
                </div>
                <div className="create-coffee-input-container">
                    <label htmlFor="year"> Year: </label>
                    <input id='year' type='text' className='create-coffee-input' onChange={this.handleChange}/> 
                </div>
                <div className="create-coffee-input-container">
                    <label htmlFor="caffeineContent"> Caffeine Content: </label>
                    <input id='caffeineContent' type='text' className='create-coffee-input' onChange={this.handleChange}/> 
                </div>
                <div className="create-coffee-input-container">
                    <label htmlFor="caffeinePercentage"> Caffeine Percentage: </label>
                    <input id='caffeinePercentage' type='text' className='create-coffee-input' onChange={this.handleChange}/> 
                </div>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}

export default CreateCoffee;
