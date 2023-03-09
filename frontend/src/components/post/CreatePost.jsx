import React from 'react';
import axios from 'axios';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            rating: null,
            coffee: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const currentValue = e.target.value;
        const name = e.target.id;
        this.setState({
            [name]: currentValue
        })
        // console.log(currentValue);
        // console.log(name);
    }

    handleSubmit(e) {
        const coffees = this.props.coffees;
        const coffeeName = this.state.coffee;
        const coffee = coffees.find(item => (item.name === coffeeName));
        axios.post('/api/post', {
            title: this.state.title,
            text: this.state.text,
            rating: parseInt(this.state.rating),
            coffee: coffee._id
        })
            .then(() => console.log("success"))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="create-post-container">
                Create a New Post
                <div className='create-post-field-container'>
                    <label htmlFor="title">Title: </label>
                    <input id="title" type="text" className="create-post-input" onChange={this.handleChange}/>
                </div>
                <div className='create-post-field-container'>
                    <label htmlFor="text">Text: </label>
                    <input id="text" type="text" className="create-post-input" onChange={this.handleChange}/>
                </div>
                <div className='create-post-field-container'>
                    <label htmlFor="rating">Rating: </label>
                    <input id="rating" type="number" className="create-post-input" onChange={this.handleChange}/>
                </div>
                <div className='create-post-field-container'>
                    <label htmlFor="coffee">Coffee: </label>
                    <select id="coffee" className="create-post-input" onChange={this.handleChange}>
                        <option value="none">Select a coffee</option>
                        {this.props.coffees.map((coffee, idx) => (
                            <option key={idx} value={coffee.name}>{coffee.name}</option>
                        ))}
                    </select>
                </div>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}

export default CreatePost;
