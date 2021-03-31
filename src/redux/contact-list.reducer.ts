import * as contactListActions from "./contact-app.actions";
import {IUser} from "../Models/IUsers";

export interface ContactState {
    loading : boolean,
    contact : IUser[],
    selectedContact : IUser,
    error : string
}

let initialState : ContactState = {
    loading : false,
    contact : [] as IUser[],
    selectedContact : {} as IUser,
    error : ''
}

export const reducer = (state = initialState, action : any) : ContactState => {
    switch (action.type) {
        case contactListActions.FETCH_CONTACT_REQUEST :
            return {
                ...state,
                loading : true
            }
        case contactListActions.FETCH_CONTACT_SUCCESS :
            return {
                ...state,
                loading : false,
                contact : action.payload.users
            }
        case contactListActions.FETCH_CONTACT_FAILURE :
            return {
                ...state,
                error : action.payload.error,
                loading : false
            }
        case contactListActions.SELECT_CONTACT :
            return {
                ...state,
                selectedContact : action.payload.selectedContact
            }
        default : return state;
    }
}
