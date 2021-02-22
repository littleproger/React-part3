import {LOGIN, SHOW_ERROR} from './actionsType';

export const login = (data) =>{
    return{
        type:LOGIN,
        payload:data
    };
};
export const showAlert = (err) =>{
    return{
        type:SHOW_ERROR,
        payload:err
    }
}
