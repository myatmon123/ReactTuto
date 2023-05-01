import { useCallback, useEffect, useLayoutEffect, useState } from "react";
// import { useEffect } from "react";
const App = () => {

  const [name,setName] = useState("Aar Kar");
  const [age,setAge] = useState(0);
  // [ variable, Function ]
  // const changeName = ()=>{
  //   setName("Hello World");
  // }
  const changeName = useCallback(()=>{
    setName("Hello World");
  },[name]);
  
  useEffect(()=>{ // aftermounted
    console.log(name);
  },[age]);
  useLayoutEffect(()=>{ // before mounted
    console.log("me first");
  })
  return (
   <>
    <h1 className="h-[60px] bg-gray-500 flex flex-row justify-center items-center"> Hello React App</h1>
    <div>{name}</div><div>{age}</div>
    <div onClick={changeName} >chage name</div>
    <div onClick={()=>setAge(1)} >chage age</div>
   </>
  )

} 

export default App;
