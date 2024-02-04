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

const url = 'https://api.github.com/users';

const FetchData = () => {
  return <h2>fetch data example</h2>;
};
export default FetchData;
