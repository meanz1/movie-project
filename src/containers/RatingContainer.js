import { setMinRate } from "../actions";
import { connect } from "react-redux";
import Rating from "../components/Rating";

const mapStateToProps = (state) => ({
  minRate: state.rate,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMinRate: (minRate) => dispatch(setMinRate(minRate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
