const user = {
    NAME : "nico",
    age: 24,
    password: 12345
};

// const setCountry=({country = "KR", ...rest})=>({country, ...rest});
// // console.log(user)
// console.log(setCountry(user))

const rename = ({NAME :namee, ...rest}) =>({namee, ...rest})

console.log(rename(user))