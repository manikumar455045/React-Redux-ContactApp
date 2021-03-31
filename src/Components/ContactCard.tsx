import React from "react"
import * as contactAppReducer from "../redux/contact-list.reducer";
import {useSelector} from "react-redux";

interface IProps{
}
interface IState{
    contact : contactAppReducer.ContactState
}

let ContactCard : React.FC<IProps> = () => {

    let contactState : contactAppReducer.ContactState = useSelector((state:IState) => {
        return state.contact
    })

    let {selectedContact} = contactState

    return (
        <React.Fragment>{
            Object.keys(selectedContact).length > 0 &&
            <div className="card">
                <div className="card-header bg-dark p-5"></div>
                <div className="card-body text-center">
                    <img src={selectedContact.picture.large} className="img-thumbnail rounded-circle contact-img" alt=""/>
                    <div className="list-group mt-2">
                        <div className="list-group-item">Name : {selectedContact.name.title} {selectedContact.name.first} {selectedContact.name.last}</div>
                        <div className="list-group-item">Gender : {selectedContact.gender}</div>
                        <div className="list-group-item">Username : {selectedContact.login.username}</div>
                        <div className="list-group-item">Age : {selectedContact.dob.age}</div>
                        <div className="list-group-item">Phone Number : {selectedContact.phone}</div>
                    </div>
                </div>
            </div>
        }
        </React.Fragment>
    )

}

export default ContactCard;