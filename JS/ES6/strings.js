// const wrapper = document.querySelector(".wrapper");

// const addWelcome = () => {
//     const div = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.innerText = "Hello";
//     div.append(h1);
//     wrapper.append(div) = div;
// };

// setTimeout(addWelcome, 5000);

// /* --------------------------------------- */


// const wrapper = document.querySelector(".wrapper");

// const addWelcome = () => {
//     const div = `
//         <div class = "hello">
//             <h1 class = "title"> Hello </h1>
//         </div>
//     `;
//     wrapper.innerHTML = div;
// };

// setTimeout(addWelcome, 2000);

// const styled = (aElement) => {
//     const el = document.createElement(aElement);
//     return args => {
//         const styles = args[0];
//         el.style = styles;
//         return el;
//     }
// }

// const title = styled("h1")`
//     background-color: red;
//     color : blue;
// `;

// const subtitle = styled("span")`
//     color : green;
// `;

// title.innerText = "We just cloned";
// subtitle.innerText = "Styled Components";

// document.body.append(title, subtitle);

// const isEmail = email => email.includes("@");
// console.log(isEmail("sseul@gmail.com"))

// const CC_NUMBER = "6060";
// const displayName = `${"*".repeat(10)}${CC_NUMBER}`

// console.log(displayName)

// const email = "sgsg9447@gmail.com"
// console.log(email.endsWith(".com"))

// const friends = Array.of("seulgi", "nico", "lynn", "dal", "mark");
// console.log(friends)

// const buttons = document.querySelectorAll("button");

// //buttons는 array의 속성을 갖지 않지만, Array.from을 통해 array의 속성을 갖게 해줌
// const ar = Array.from(buttons);
// ar.forEach(button => {
//     button.addEventListener("click", () => console.log("I've been clicked"))
// });

// console.log(buttons);

// const friends = ["seulgi@gmail.com", "lynn@naver.com", "hi@kakao.com", "me@gmail.com"];
// const target = friends.find(friend => friend.includes("@naver.com"));
// console.log(target);

// friends[target] = friends