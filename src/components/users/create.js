import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Create = () => {
    const navigation = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleData = () => {
        console.log({ name, email });

        axios.post('http://localhost:3000/users', {
            name: name,
            email: email,
        }).then(() => {
            navigation('/users');
        }).catch((error)=> {
            console.error(error);
        })
    };

    return(
    <div>
      <h2>Create User</h2>

      <div className="form">
            <div>
            <div>Name</div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
            <div>Email</div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
            <div onClick={handleData}>Submit</div>
            </div>
      </div>
    </div>
    );
};

export default Create