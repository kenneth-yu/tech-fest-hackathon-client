export function authenticateUser(username, password) {
  return (dispatch) => {
    let user = {email: username, password: password}
    console.log(user)
    return fetch(`http://localhost:3000/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({email: username, password: password})
    }).then(res => res.json())
    .then(data =>{
      if (data.message){
        window.alert(data.message)
      }
      else{
        // console.log(data.auth_token)
        localStorage.setItem("token", data.auth_token)
        // dispatch({type: "AUTHENTICATE_USER", payload: data.user});
      }
    }).catch(error => console.log(error))

  }
}
