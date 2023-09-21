import Starter from './tutorial/01-useState/final/02-useState-basics'

function App() {

  let count = 0;

  const handleClick = () =>{
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <Starter />
    </div>
  );
}

export default App;
