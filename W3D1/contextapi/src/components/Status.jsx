import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Status = () => {

    const {auth}=useContext(AuthContext);
  return (
    <h3>{auth ? `User is logged in with token ${auth}`:"User is not logged in"}</h3>
  )
}

export default Status;