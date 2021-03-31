import React from "react"
import spinner from "../Assets/images/spinner.gif"
interface IProps{
}
interface IState{
}

let Spinner : React.FC<IProps> = () => {

    return (
        <React.Fragment>
            <div>
            <img src={spinner} className="d-flex m-auto" alt=""/>
            </div>
        </React.Fragment>
    )

}

export default Spinner;