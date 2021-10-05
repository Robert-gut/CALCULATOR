// Conntext react to store
import { connect } from "react-redux";
import { Plus, Minus, Division, Multiplication} from "../../Actions/CounterActions";

import "./Counter.css";

const Counter = ({ counter, Plus, Minus, Division, Multiplication }) => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <p>number 1</p>
          <input id='number1' type='number'></input>
          <p>number 2</p>
          <input id='number2' type='number'></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <p>+ - / *</p>
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
            onClick={Division}
          >
            /
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={Multiplication}
          >
            *
          </button>
          <div className='row'>
            <div className='col'>
              <p>result</p>
              <span className="counter">{counter}</span>
            </div>
          </div>
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
  Division,
  Multiplication
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
