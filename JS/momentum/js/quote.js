const quotes = [
    {
        quote: "우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
        author: "Walter Pater"
    },
    {
        quote: "교육의 목적은 비어 있는 머리를 열려 있는 머리로 바꾸는 것이다.",
        author: "Malcolm Forbes"
    },
    {
        quote: "교육의 위대한 목표는 앎이 아니라 행동이다.",
        author: "Herbert Spencer"
    },
    {
        quote: "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
        author: "Confucius"
    },
    {
        quote: "현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
        author: "Sir Francis Bacon"
    },
    {
        quote: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
        author: "Seneca"
    },
    {
        quote: "인생은 외국어이다. 모든 사람이 그것을 잘못 발음한다.",
        author: "Christopher Morley"
    },
    {
        quote: "허물이 있다면, 버리기를 두려워말라.",
        author: "Confucius"
    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "Benjamin Franklin"
    },
    {
        quote: "세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.",
        author: "Dale Carnegie"
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;