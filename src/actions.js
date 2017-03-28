import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actiontypes';

/*

 * Constants

 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};  

/*
 
 * action creators
 
 */

export const addTodo = (text) => {
  return { type: ADD_TODO, text };
}

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index };
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter };
}