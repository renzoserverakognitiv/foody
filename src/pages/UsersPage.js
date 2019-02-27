import React, { Component } from 'react';
import Segment from '../components/Segment';
import AddUser from '../components/AddUser';

class UsersPage extends Component {
  render() {
    return (
      <Segment
        title="Usuarios"
        content="Listado de usuarios"
        headerToolset={<AddUser />}
      />
    );
  }
}

export default UsersPage;