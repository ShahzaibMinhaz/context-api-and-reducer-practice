const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'INITIAL':
        return state = 1  
    }
  }

  export default counterReducer;