import React, { useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";

import useAuth from '../hooks/useAuth';

export default function PrivateOutlet({ email, pass, inputedEmail, inputedPass, authCheck, setAuthCheck }) {
  const auth = useAuth({ email, pass, inputedEmail, inputedPass, authCheck, setAuthCheck });
  
  useEffect(() => {
    setAuthCheck(auth);
    console.log(authCheck);
  })

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
