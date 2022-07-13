import { EFormFieldChanges, formFieldActionType } from './formFields.action';
import { setNewFieldStylesFunction } from './setNewFieldStyles.function';

export const formFieldNode = 'formField';

export interface IFormFieldState {
  [key: string]: any
}

const CInitialState: IFormFieldState = {}

export const formFieldReducer = (state: IFormFieldState = CInitialState, action: formFieldActionType) => { //Type
  switch (action.type) {
    case  EFormFieldChanges.pushNewField:
      return {
        ...state,
        [action.payload.id]: setNewFieldStylesFunction(action.payload.name)
      };
    case EFormFieldChanges.updateFieldStyles:
      return {
        ...state,
        [action.payload.id]: {...state[action.payload.id], ...action.payload.styles}
      };
    default:
      return state;
  }
}
