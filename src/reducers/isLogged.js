

const loggedReducer = (state = [], action)=>{
  
    switch(action.type) {
        case "LOGIN_USER":
            return action.user;
        default:
            return state;
    }
}
export default loggedReducer;
