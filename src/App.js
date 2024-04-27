import { useState } from "react"

function App() {

  const[count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  flex-col gap-10 bg-gradient-to-r from-violet-200 to-pink-200"
   >
      <div className="font-serif text-2xl md:text-4xl font-medium">Increment & Decrement</div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      
      <button onClick={resetHandler} className="font-serif bg-black text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>

  );
}

export default App;
