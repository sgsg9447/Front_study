import React from "react";
export default function Example5() {
  const [count, setCount] = React.useState(0);

  //   React.useEffect(() => {
  //     console.log("componentDidMount & componentDidUpdate", count);
  //   });
 
  //componentWillUnmount
  //useEffect안에 있는 함수가 새로운 함수를 리턴
    React.useEffect(() => {
      console.log("componentDidMount");
      return()=>{
        //cleanup (바로 위 consolelog 부분은 render가 된 직후 인데, 즉, clean up 부분은 다음 디펜더시에 의해 리턴부분이 실행될 때 cleanup부분을 먼저하고, 컨솔로그가 실행됨
        //여기서는 디펜던시 리스트가 없기때문에, 최초에만 실행되고 이상태에서 cleanup이 일어나려면 이게 사라질 때만 불려지겠지! ))
        //componentWillUnmount
    }
    },[]);
 
  
//   React.useEffect(() => {
//     console.log("componentDidMount", count);
//   }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
  },[count]);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count
);
return()=>{
    //cleanup
    //NextComponentDidUpdate가 되기 직전에 정리하고 떠나는!
    console.log('cleanup by count', count);
}
  },[count]);

  return (
    <div>
      <p>You Clicked {count} times('funcion')</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
