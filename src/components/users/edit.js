import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Edit = () =>{
    const navigation = useNavigate();
    
    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then((response) => {
            return(response.data);
        })
        .then((user) => {
            setName(user.name);
            setEmail(user.email);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [id, setName, setEmail]);

    const handleData = () => {
        axios.patch(`http://localhost:3000/users/${id}`, { name: name, email: email,})
        .then(() => {
            navigation(`/users/${id}`);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return(
        <div>
            <h2>edit user</h2>

            <div className="form">
                    <div>
                    <div>Name</div>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>

                    <div>
                    <div>Email</div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <div>
                    <div onClick={handleData}>Submit</div>
                    </div>
            </div>
    </div>
    );
};

export default Edit;