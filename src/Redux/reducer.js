const initialState = {
  currentUser: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case "AUTHENTICATE_USER":
    return  {...state, currentUser: action.payload}

  default:
    return state
  }
}
