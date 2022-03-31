import React, {Fragment} from "react";
import Provider from './Provider';
import Context from "./Context";


const AgentBond = () => {
  return (
    <Context.Consumer>
      {
        (Context) => (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {Context.data.mname}</p>
            <p>Mission Status: {Context.data.accept}</p>
            <button onClick={Context.isMissionAccepted}>Choose to Accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  ) 
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentOne = () => {
  return <AgentTwo />
}

const Agents = () => {
  return <AgentOne />
}

const App = () => {
  return(
    <div>
      <h1>
        Context API
      </h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;