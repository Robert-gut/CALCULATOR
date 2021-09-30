// Conntext react to store
import { connect } from "react-redux";
import { Plus, Minus, PlusFive, ML ,ZERO} from "../../Actions/CounterActions";

import "./Counter.css";

const Counter = ({ counter, Plus, Minus, PlusFive, ML ,ZERO }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col center">
          <span className="counter">{counter}</span>
          <button
            type="button"
            className="btn btn-success operators"
            onClick={Plus}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={Minus}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={ML}
          >
            *num
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={ZERO}
          >
            0
          </button>
          <button type="button"
            className="btn btn-danger operators"
            onClick={() => PlusFive(2)}>
            /2
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ CounterReducer }) => {
  console.log("mapStateToProps ", CounterReducer);
  const { counter } = CounterReducer;
  return { counter };
};

const mapDispatchToProps = {
  Plus,
  Minus,
  PlusFive,
  ML,
  ZERO
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
