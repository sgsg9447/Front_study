import React, { useEffect } from 'react';
import ResultAudio from '../components/ResultAudio';
import ResultChat from '../components/ResultChat';
import ResultVideo from '../components/ResultVideo';


function Result() {


  return (
    <div>
      <h1>결과</h1>
      <div>결과창. 이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</div>
      <div>
        오디오 결과 : <ResultAudio />
      </div>
      <div>
        비디오 결과 : <ResultVideo />
      </div>
      <div>
        채팅 결과 : <ResultChat />
      </div>
    </div>
  );
};

export default Result;