const initialState = {
  counter: 0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        counter:Math.floor(action.a) + Math.floor(action.b)
      };
    case "MINUS":
      return {
        counter: Math.floor(action.a) - Math.floor(action.b)
      };
    case "Division":
      return {
        counter: Math.floor(action.a) / Math.floor(action.b)
      };
    case "Multiplication":
      return {
        counter: Math.floor(action.a) * Math.floor(action.b)
      };
    default:
      return state;
  }
};

export default CounterReducer;
