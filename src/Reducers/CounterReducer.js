const initialState = {
  counter: 0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        counter: +action.a + +action.b
      };
      case "MINUS":
        return {
        counter: +action.a - +action.b
      };
      case "Division":
        return {
          counter: +action.a / +action.b
        };
      case "Multiplication":
        return {
          counter: +action.a * +action.b
        };
      default:
        return state;
  }
};
export default CounterReducer;
