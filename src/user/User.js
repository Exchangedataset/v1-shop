import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

class User extends React.Component {
  render() {
    if (this.props.user_id === null) {
      return (<div className='User'><h1>You are not logged in</h1></div>);
    }

    return (
      <Container className='User'>
        <h1>User: {this.props.user_id}</h1>
        <h2><Link to='/user/purchase_history'>Purchase History</Link></h2>
      </Container>
    );
  }
}

export default User;