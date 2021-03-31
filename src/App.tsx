import React from 'react';
import "./App.css";
import ContactApp from "./Components/ContactApp";









let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">React Redux Contact App</a>
            </div>
        </nav>
        <ContactApp/>
        </React.Fragment>
  );
}

export default App;
