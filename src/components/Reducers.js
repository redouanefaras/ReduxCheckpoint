
  import { ADD_ONE, MINUS_ONE } from './Actions';

  const initialState = {
    count: 0
    };
    
    
    function reducer(state = initialState, action) {
    switch(action.type) { 
      case ADD_ONE:return {count: state.count + 1}; 
      case MINUS_ONE:return {count: state.count - 1}; 
    default: return state;}
    }
    export default reducer;
    