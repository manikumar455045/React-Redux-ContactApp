import axios from "axios";
import {IUser} from "../Models/IUsers";

export const FETCH_CONTACT_REQUEST : string = "FETCH_CONTACT_REQUEST";
export const FETCH_CONTACT_SUCCESS : string = "FETCH_CONTACT_SUCCESS";
export const FETCH_CONTACT_FAILURE : string = "FETCH_CONTACT_FAILURE";
export const SELECT_CONTACT : string = "SELECT_CONTACT";

export const fetchContacts = () => {
    return (dispatch:any) => {
        dispatch({
            type : FETCH_CONTACT_REQUEST
        });
        let dataUrl : string = "https://gist.githubusercontent.com/manikumar455045/040cfb672a251464ccba35c99adf0922/raw/d4bc89badc9658f13cb5d94e00f6946582f8b968/contact.json"
        axios.get(dataUrl).then((response) => {
            dispatch({
                type : FETCH_CONTACT_SUCCESS,
                payload : {
                    users : response.data
                }
            });
        }).catch((error) => {
            console.error(error)
            dispatch({
                type : FETCH_CONTACT_FAILURE,
                payload :{
                    error : error
                }
            });
        })
    }
}
export const selectedContact = (user : IUser) => {
    return (dispatch : any) => {
        dispatch({
            type : SELECT_CONTACT,
            payload : {
                selectedContact : user
            }
        })
    }
}