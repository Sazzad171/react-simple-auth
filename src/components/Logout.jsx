import React from 'react'
import Dashboard from './Dashboard';

export default function Logout({setAuthCheck}) {

  setAuthCheck(false);

  return <Dashboard />;
}
