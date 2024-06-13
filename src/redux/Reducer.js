const initialState = {
  name: null,
  QuestionData: [],
  select_City: null,
  token: null,
  category_Id: '',
  category_name: '',
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'User_id':
      return {...state, name: action.id};
    case 'select_country':
      return {...state, QuestionData: action.id};
    case 'select_City':
      return {...state, select_City: action.id};
    case 'Token':
      return {...state, token: action.id};
    case 'category_Id':
      return {...state, category_Id: action.id};
    case 'category_name':
      return {...state, category_name: action.id};
    default:
      break;
  }
};
export default mainReducer;
