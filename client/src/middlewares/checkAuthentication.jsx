export function checkAuthentication() {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token is present, false otherwise
  }
  

export default checkAuthentication;