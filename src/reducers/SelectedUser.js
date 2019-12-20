

const selectedUserReducer = (state = null, action)=>{
  console.log(action)
      switch(action.type) {
          case "SELECTED_USER":
              return  action.user ;
          default:
              return state;
      }
  }
  export default selectedUserReducer;
  