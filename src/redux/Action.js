import {category_Id, category_name, select_City, select_country, Token, User_id} from './type';

export const UserName = id => {
  return {type: User_id, id: id};
};
export const token = id => {
  return {type: Token, id: id};
};
export const QuestionData = id => {
  return {type: select_country, id: id};
};
export const SelectCity = id => {
  return {type: select_City, id: id};
};
export const categoryId = id => {
  return {type: category_Id, id: id};
};

export const categoryName = id => {
  return {type: category_name, id: id};
};
