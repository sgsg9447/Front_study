import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;
  console.log(searchParams);
  //   const obj = new URLSearchParams(searchParams);
  //   console.log(obj.get("name"))
  const query = queryString.parse(searchParams);
  console.log(query);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name 은 {query.name}입니다.</p>}
    </div>
  );
}
//URLSearchParams의 이름을 다알아야하는 단점이 있음
//해결 : npm i query-string- S
