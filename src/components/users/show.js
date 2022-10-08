import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';


const Show = () => {
    const navigation = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [id, setUser]);

    const editUser = (id) => {
        navigation(`/users/${id}/edit`)
    };

    const deleteEntry = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
        .then (() => {
            navigation('/users')
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return(
        <div>
            <h4>{ user.name }</h4>
            <div>ID: { user.id}</div>
            <div>Email: {user.email } </div>
            <div onClick={() => editUser(user.id)}>Edit</div>
            <div onClick={() => deleteEntry(user.id)}>Delete</div>
        </div>
    );
};

export default Show