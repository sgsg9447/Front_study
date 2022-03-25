import React from "react";

//useState => count
//useState => {count : 0} 으로 변경해보겠다!

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  //[count : 변경되는 값, setCount : count를 바꾸는 함수]
  return (
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  // function click () {
  //     setState({count : state.count +1});
  // }

  function click() {
    setState((state) => ({ count: state.count + 1 }));
    //setState가 어떤것에 dependency가 있는지 중요해짐
  }
}
