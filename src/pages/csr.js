import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CsrTest() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = await response.data;
        setUsers(data);
    };

    console.log(users);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    );
}