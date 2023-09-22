import Starter from './tutorial/01-useState/starter/03-useState-array';
import Final from './tutorial/01-useState/final/03-useState-array';

function App() {

  let count = 0;

  const handleClick = () =>{
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <Starter />
      <Final />
    </div>
  );
}

export default App;
