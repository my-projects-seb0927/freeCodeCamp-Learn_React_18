/*
- Import useState and useEffect
- Setup state value
- users - default value []
- setup useEffect
- MAKE SURE IT RUNS ONLY ON INITIAL RENDER
- In the cb, create a function which performs fetch functionality
  - Use url I provided in the starter file
  - You can use .then or async
  - Set users equal to result
  - Iterate over the list and siplay image, user name and link

*/

import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  // Creating the useState
  const [users, setUsers] = useState([]);

  // Creating the useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json(); // This returns the json in an array
        // Set the users
        setUsers(users);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);
  
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
