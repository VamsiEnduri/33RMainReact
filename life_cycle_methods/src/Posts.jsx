import React from "react";
import axios from "axios";
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {},
    };
  }
  componentDidMount() {
    this.fetchData(this.props.id);
  }
  componentDidUpdate(prev){
        if(prev.id != this.props.id){
               this.fetchData(this.props.id);

        }
  }
  fetchData = (id) => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        console.log(res.data);
        this.setState({posts:res.data})
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return <div>
        <h1>{this.state.posts.title}</h1>
    </div>;
  }
}
export default Posts;
