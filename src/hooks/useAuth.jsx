export default function useAuth( {email, pass, inputedEmail, inputedPass, authCheck, setAuthCheck }) {

  let auth = false;

  if( email === inputedEmail && pass === inputedPass ) {
    auth = true;
    // setAuthCheck(true);
  }

  return auth;
}