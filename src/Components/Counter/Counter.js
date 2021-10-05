// Conntext react to store
import { connect } from "react-redux";
import { Plus, Minus, Division, Multiplication } from "../../Actions/CounterActions";

import "./Counter.css";

const Counter = ({ counter, Plus, Minus, Division, Multiplication }) => {
  let number1, number2;
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <p>number 1</p>
          <input onChange={(e) => { number1 = e.target.value }} defaultValue={number1} id='number1' type='number'></input>
          <p>number 2</p>
          <input onChange={(e) => { number2 = e.target.value }} id='number2' type='number'></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>+ - / *</p>
          <button
            type="button"
            className="btn btn-success operators"
            onClick={() => {
              Plus(number1, number2)
            }}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={() => {
              Minus(number1, number2)
            }}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={() => {
              Division(number1, number2)
            }}
          >
            /
          </button>
          <button
            type="button"
            className="btn btn-warning operators"
            onClick={() => {
              Multiplication(number1, number2)
            }}
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
