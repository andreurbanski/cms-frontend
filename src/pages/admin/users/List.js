import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import UserFormModal from '../../../components/UserFormModal';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            error: null,
            pagination: {},
            showModal: false,
            currentUser: null,
        };
    }

    componentDidMount() {
        // Fetch users data from API or database
        this.fetchUsers();
    }

    handleShowModal = (user = null) => {
        this.setState({ currentUser: user, showModal: true });
      };
    
    handleCloseModal = () => {
        this.setState({ showModal: false });
      };

    handleSaveUser = (user) => {
        const { currentUser, users } = this.state;
        if (currentUser) {
          // Edit existing user
          this.setState({
            users: users.map(u => u.id === currentUser.id ? user : u),
            currentUser: null, // Reset current user
          });
        } else {
          // Add new user
          this.setState({
            users: [...users, { ...user, id: Math.max(...users.map(u => u.id)) + 1 }], // Example ID generation
          });
        }
        this.handleCloseModal();
      };

    fetchUsers() {
         // Implement your logic to fetch users data here
        // You can use libraries like axios or fetch API
        // Update the state with the fetched data
        this.setState({ isLoading: true });

        // Example using fetch API
        fetch('http://0.0.0.0:7778/api/admin/users/list')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data.data, isLoading: false, pagination : data});
            })
            .catch(error => {
                this.setState({ error, isLoading: false });
            }); 
    }
    editUser(user) {
        this.setState({ currentUser: user });
        this.handleShowModal(user)
    }
    deleteUser(id) {
        // Implement your logic to delete user here
        // You can show a confirmation dialog before deleting
    }

    render() {
        const { isLoading, error, pagination } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        const users = pagination.data || [];
        return (
            <>
             <Button variant="primary" onClick={() => this.handleShowModal()}>
                Add New User
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <Button variant="warning" onClick={() => this.editUser(user)}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => this.deleteUser(user)}>Delete</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                {this.state.showModal && (
                    <UserFormModal
                        show={this.state.showModal}
                        handleClose={this.handleCloseModal}
                        handleSave={this.handleSaveUser}
                        userData={this.state.currentUser}
                    />
        )}
            </>
        );
    }
}

export default ListUsers;