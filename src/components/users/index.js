import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Index = () => {
    const navigation = useNavigate();

    const [users, setUsers] = useState ([])

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [setUsers]);

    const deleteEntry = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
        .then (() => {
            updateUsers();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const redirectToUser = (id) => {
        navigation(`/users/${id}`)
    };

    const updateUsers = () => {
        axios.get('http://localhost:3000/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    

    return(
        <div>
            <h2>User List</h2>
            { users.map((user) => {
                return(
                    <div key={ user.id }>
                        <div>Name</div>
                        <div>{ user.name }</div>
                        <div>Email</div>
                        <div>{ user.email }</div>
                        <div onClick={() => redirectToUser(user.id)}>Show</div>
                        <div onClick={() => deleteEntry(user.id)}>Delete</div>
                        <br />
                    </div>
                );
            }) }
            <div><Link to = "/users/create">Create new user</Link></div>
        </div>
    );
};

export default Index