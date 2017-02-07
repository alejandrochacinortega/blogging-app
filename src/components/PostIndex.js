import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';



class Postindex extends React.Component {
  componentWillMount() {
    console.log('this would be a good time to call an action creater ');
    this.props.fetchPosts();
  }

  render() {
    console.log('this ', this.props);
    return (
      <div>
        List of blog posts
      </div>
    )
  }
}


export default connect(null, { fetchPosts })(Postindex);