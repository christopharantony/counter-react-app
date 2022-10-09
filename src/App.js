import Counter from "./Counter";
import {useState} from 'react'

function App() {
  const [state,setState] =  useState(false)
  return (
    <div>
      <h1 onClick={()=>setState(!state)} > Show / Hide</h1>
      {/* { state ? <Counter /> : null } */}
      { state && <Counter /> }
    </div>
  );
}

export default App;
