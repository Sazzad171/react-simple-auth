import React, { useEffect } from 'react'
import Dashboard from './Dashboard';

export default function Logout({setAuthCheck, setInputedEmail, setInputedPass}) {

  useEffect(() => {
    setAuthCheck(false);
    setInputedEmail("");
    setInputedPass("");
  })

  return <Dashboard />;
}
