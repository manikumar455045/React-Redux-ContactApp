import React from "react"
import * as contactAppActions from "../redux/contact-app.actions";
import * as contactAppReducer from "../redux/contact-list.reducer";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "./Spinner";
import {IUser} from "../Models/IUsers";
interface IProps{
}
interface IState{
    contact : contactAppReducer.ContactState
}

let ContactList : React.FC<IProps> = () => {

    let dispatch = useDispatch();

    let contactState : contactAppReducer.ContactState = useSelector((state:IState) => {
        return state.contact
    })


    let selectedContact = (contact: IUser) =>
    {
        dispatch(contactAppActions.selectedContact(contact));
    }

    return (
        <React.Fragment>
            {
                contactState.loading ? <Spinner/> :
                    <React.Fragment>
                        <section className="mt-2">
                            <div className="container">
                                <table className="table table-striped text-center">
                                    <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>City</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        contactState.contact.map((user) => {
                                            return (
                                                <tr key={user.login.uuid} onClick={selectedContact.bind(this,user)}>
                                                    <td>{user.login.uuid.substr(31)}</td>
                                                    <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </React.Fragment>
            }
        </React.Fragment>
    )

}

export default ContactList;