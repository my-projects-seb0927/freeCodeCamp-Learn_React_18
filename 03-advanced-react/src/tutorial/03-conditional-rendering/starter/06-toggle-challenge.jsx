/*
- Create state value (boolean)
- Return a button and a component/element
- When user clicks the button
  - Toggle state value
  - Conditionally render component/element
*/

import { useState, useEffect } from 'react'

const ToggleChallenge = () => {

  const [isGreeting, setIsGreeting] = useState(false)

  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={() => setIsGreeting(!isGreeting)}>{!isGreeting ? 'Press for hello!' : 'Nice to greet you!'}</button>
      {isGreeting ? (
        <h3>Hello Dear User! </h3>
      ) : (null)}
    </div>);
};

export default ToggleChallenge;
