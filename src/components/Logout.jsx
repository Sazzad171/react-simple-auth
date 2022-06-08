import React from 'react'
import Dashboard from './Dashboard';

export default function Logout({setAuthCheck, setInputedEmail, setInputedPass}) {

  setAuthCheck(false);
  setInputedEmail("");
  setInputedPass("");

  return <Dashboard />;
}
