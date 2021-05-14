import { useEffect, useState } from 'react';
import axios from 'axios';

function Ssg({ users }) {

    return (
        <div>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    );
}

export async function getServerSideProps(context) {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;

    return {
        props: { users: data }, // will be passed to the page component as props
    }
}

export default Ssg;