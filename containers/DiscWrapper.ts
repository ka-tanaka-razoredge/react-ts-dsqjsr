import { connect } from 'react-redux'
import Disc from '../Disc'
//import { IState, ITodoProps } from '../commons/interfaces';
import { Dispatch } from 'redux';

/*
function getVisibleTodos(todos: Array<ITodoProps>, filter: string): Array<ITodoProps> {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
*/

/**
 * At first, I work like Store.getState(). Then I cram its return into props.
 */
const mapStateToProps = (state) => {
  console.log(state);
  return {
    innerHTMLForFrontFront: state.nameEx.innerHTMLForFrontFront,
    backgroundColor: state.nameEx.backgroundColor
  };

  if (1 <= state.nameEx.length) {
    return {innerHTMLForFrontFront: state.nameEx[0].innerHTMLForFrontFront};
  } else {
      return {innerHTMLForFrontFront: "A"};
  }
};

/**
 * I cram, function(s) that dispatches action into store, into props.
 */
/*
const mapDispatchToProps = (dispatch: Dispatch) =>({
//    toggleTodo: (id: number) => dispatch(toggleTodo(id))
});
*/
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disc)