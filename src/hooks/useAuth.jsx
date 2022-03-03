export default function useAuth( {email, pass, inputedEmail, inputedPass, authCheck, setAuthCheck }) {

  if( email === inputedEmail && pass === inputedPass ) {
    setAuthCheck(true);
  }

  return authCheck;
}