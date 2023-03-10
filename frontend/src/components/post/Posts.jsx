import axios from 'axios';
import React from 'react';
import './Posts.css';
import PostsItem from './PostsItem';
import CreatePost from './CreatePost';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: [], coffees: [], renderForm: false};
    }

    componentDidMount() {
        axios.get('/api/post')
            .then(posts => {
                console.log(posts.data);
                this.setState({ posts: posts.data });
                })
            .catch(err => console.log(err));
        axios.get('/api/coffee')
            .then(coffees => {
                console.log(coffees.data);
                this.setState({ coffees: coffees.data });
                })
            .catch(err => console.log(err));
    }

    render() {
        const postsData = this.state.posts;
        const coffeesData = this.state.coffees;
        return (
            <div className="posts-container">
                <h2 className="posts-header"> 
                    Posts Header
                    <button 
                    className="create-posts-button" 
                    onClick={() => this.setState({renderForm: !this.state.renderForm})}
                    >
                        New Post
                    </button>
                    {this.state.renderForm ? <CreatePost coffees={coffeesData} /> : null}
                </h2>
                {postsData.map((post) => (
                    <PostsItem key={post._id} title={post.title} rating={post.rating} text={post.text} coffeeId={post.coffee} coffees={coffeesData}/>
                ))}
            </div>
        )
    }
}

export default Posts;
