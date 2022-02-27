import { connect } from "react-redux";
import "./Counter.css";

function Counter(props) {
  const handleIncrease = () => {
    props.dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrease = () => {
    props.dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div className="main">
      <h1 className="title"> A Counter using Redux </h1>
      <div className="counter">
        <button onClick={handleDecrease}> Decrease </button>
        <h1 className="count"> {props.count} </h1>
        <button onClick={handleIncrease}> Increase </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
