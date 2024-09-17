import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(result => {
                console.log('Data received:', result);
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    console.error('Expected an array but received:', result);
                }
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h1>Student List</h1>
                <div className='d-flex justfy-justify-content-end'>
                    {/* <link to='/create' className='btn btn-success' >Create +</link> */}
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((list) => (
                                <tr key={list.id}>
                                    <td>{list.id}</td>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.age}</td>
                                    <td>
                                        <button className='btn btn-success'>Read</button>
                                        <button className='btn btn-primary btn-info'>Edit</button>
                                        <button className='btn btn-danger btn-info'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
