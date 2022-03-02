export default function useAuth( {email, pass, inputedEmail, inputedPass }) {

  let auth = false;

  if( email === inputedEmail && pass === inputedPass ) {
    auth = true;
  }

  return auth;
}