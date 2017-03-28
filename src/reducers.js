import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actiontypes'
import { VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: 
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

/*


// Equivalent to this:

export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}


 */

export default todoApp;