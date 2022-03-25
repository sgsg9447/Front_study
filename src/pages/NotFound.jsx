import React from 'react';
import useResult from '../hooks/useResult';


const NotFound = () => {
  const { audio } = useResult();
  return (
    <div>
      {audio}
      <h1>Not Found 404 </h1>
      <p>에러창. 이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다. </p>
    </div>
  );
};

export default NotFound;