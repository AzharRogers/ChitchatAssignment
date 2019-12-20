export const loginUserAction = (user) => {
    console.log('action called')
    return {
      type: 'LOGIN_USER',
      user
    }
  };
  
  export const selectedUserAction = (user) => {
    console.log('selected action called')
    return {
      type: 'SELECTED_USER',
      user
    }
  };