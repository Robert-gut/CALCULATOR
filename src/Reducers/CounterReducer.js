const initialState = {
  counter: 0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        counter: state.counter + 1
      };
    case "MINUS":
      return {
        counter: state.counter - 1
      };
    case "ML":
      return {
        counter: state.counter * state.counter
      };
      case "ZERO":
        return {
          counter: state.counter = 0
        };
    case "PLUS_FIVE":
      return {
        counter: state.counter / action.payload
      };
    default:
      return state;
  }
};

export default CounterReducer;
