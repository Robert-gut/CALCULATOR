import ReactDOM from "react-dom";

// Import Styles
import "./index.css";

// Import components
import Counter from "./Components/Counter/Counter";

// Import store
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
