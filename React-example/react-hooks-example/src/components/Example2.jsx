 //import React from "react";

// export default class Example1 extends React.Component {
//   state = { count: 0 };
//   render() {
//     const { count } = this.state;
//     return (
//         <div>
//           <p>You Clicked {count} times</p>
//           <button onClick={this.click}>Click me</button>
//         </div>
//       );
    
//   }
//   click = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
// }


import React from "react";
export default function Example2(){
    const [count, setCount] = React.useState(0)
    //[count : 변경되는 값, setCount : count를 바꾸는 함수] 
    return (
        <div>
          <p>You Clicked {count} times('funcion')</p>
          <button onClick={click}>Click me</button>
        </div>
      );

    function click () {
        setCount(count +1);
    }
}