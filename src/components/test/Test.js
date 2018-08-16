import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  // // These are Component lifecycle methods. All the 'componentWill...' are being deprecated.
  // // Focus on 'getDerivedStateFromProps' and 'getSnapshotBeforeUpdate'
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => 
        this.setState({ 
          title: data.title, 
          body: data.body 
      })
    );
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');   
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');    
  // }
  
  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');    
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillRecieveProps...');  
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}t</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;