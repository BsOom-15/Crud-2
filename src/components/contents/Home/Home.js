import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUsers } from '../../Redux/UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUsers({id:id}))
    }
  return (
    <div className='container'>
      <h2>CRUD App Using Redux</h2>
      <Link to={'/create'}>
      <button className='btn btn-success my-3'>Create +</button>
      </Link>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {users && users.map((user, index)=>{
            return(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/edit/ ${user.id}`}>
                        <button className='btn btn-sm btn-warning' >Edit</button>
                    </Link>
                        <button onClick={()=> handleDelete(user.id) } className='btn btn-sm btn-danger ms-2' >Delete</button>
                    </td>
                </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
