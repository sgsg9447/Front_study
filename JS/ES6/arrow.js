/* ---------------------------------1----------------------------------- */

const names = ['nico', 'lynn', 'sseul'];

const hearts = names.map(function (item) { //map : 각각의 아이템마다 함수를 호출하는 일을 함
    return item + "💖";
})

console.log(hearts)
/* --------------------------------------------------------------------- */

/* ---------------------------------2----------------------------------- */

const names = ['nico', 'lynn', 'sseul'];

function addHeart(item){
    return item + "💖";
};

const hearts = names.map(addHeart);
console.log(hearts)

/* --------------------------------------------------------------------- */

/* ---------------------------------3----------------------------------- */

const names = ['nico', 'lynn', 'sseul'];
const hearts = names.map((item)=>{
    return item + "💖";
})
console.log(hearts)

/* --------------------------------------------------------------------- */

/* ---------------------------------4----------------------------------- */


const names = ['nico', 'lynn', 'sseul'];
const hearts = names.map(item => item + "💖")
console.log(hearts)

/* --------------------------------------------------------------------- */
