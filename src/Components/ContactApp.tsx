import React, {useEffect} from "react"
import * as contactAppActions from "../redux/contact-app.actions";
import * as contactAppReducer from "../redux/contact-list.reducer";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "./Spinner";
import {IUser} from "../Models/IUsers";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
interface IProps{
}
interface IState{
    contact : contactAppReducer.ContactState
}

let ContactApp : React.FC<IProps> = () => {

    let dispatch = useDispatch();

    let getUsers = () => {
        dispatch(contactAppActions.fetchContacts());
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Contact App</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto, consequatur culpa debitis delectus dicta doloremque enim illo incidunt iste neque nobis nulla, quidem reprehenderit sapiente soluta velit veniam!</p>
                        <button className="btn btn-success" onClick={getUsers}>Get Users</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ContactList/>
                    </div>
                    <div className="col-md-4">
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ContactApp;