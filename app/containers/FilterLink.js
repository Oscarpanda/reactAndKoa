import {connect} from "react-redux";
import { setVisibilityFilter } from "../redux/actions/index";
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todos[ownProps.name].visible,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter, ownProps.name))
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
export default FilterLink ;