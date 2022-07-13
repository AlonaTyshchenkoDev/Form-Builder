import { EFormChanges, FormActionsType } from './form-styles.actions';
import { IGeneralFormState } from '../interfaces';

export const formStylesNode = 'formStyles';

const initialState: IGeneralFormState = {
  formTitle: 'Form Label',
  color: 'black',
  background: 'white',
  borderStyle: 'solid',
  borderColor: '#C2D6E1',
};

export const formStylesReducer = (state: IGeneralFormState = initialState, action: FormActionsType) => {
  switch (action.type) {
    case  EFormChanges.changeFormStyles:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
