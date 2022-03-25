// import '../App.css';
import React, { useState, useRef, useCallback } from "react";
import axios from 'axios'
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import useResult from "../hooks/useResult";

export default function Home() {
  const [url, setUrl] = useState()
  const urlInput = useRef();
  const inputValue = document.getElementById('link')

  let { result, setResult, setAudio, setVideo, setChat } = useResult();

  const onChangeUrl = useCallback(e => {
    const value = e.target.value;
    console.log('call onChangeUrl()')
    if (value.indexOf('youtube') !== -1) {
      console.log('This is Youtube link')
    }
    setUrl(value);
  }, []);

  const history = useHistory();
  const goResult = () => {
    history.push('/result', result);
    console.log('go result')
  };

  const goNotFound = () => {
    history.push('/notfound');
    console.log('notfound')
  };

  function requestResult(url) {
    axios.post('http://localhost:5000/flask/hello',
      {
        'url': url,
      }).then(response => {
        console.log("Success", response.data);
        const result = response.data.result;
        setResult(result);
        // const objAudio = result.audio.map((value, index) => {'time': index, 'peak': value});
        // const objChat = result.chat.map((value, index) => {'time': index, 'peak': value});
        // const objVideo = result.video.map((value, index) => {'time': index, 'peak': value});
        setAudio(response.data.result.audio);
        setChat(response.data.result.chat);
        setVideo(response.data.result.video);
        

      }).catch(error => {
        console.log(error);
        goNotFound();
      })
    goResult();
  }


  function sendUrl(e) {
    console.log('call sendUrl()')
    if (inputValue && inputValue.value) {
      console.log("인풋창 입력값 : ", inputValue.value);
      requestResult(url);
    };
  };

  function getMethod(e) {
    console.log("call getMethod()")
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("Success", response.data)
      goResult();
    }).catch(error => {
      console.log(error)
    })
  }

  function removeUrl() {
    if (inputValue && inputValue.value) {
      setUrl(prev => (''));
      inputValue.value = '';
      urlInput.current.focus();
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <p>
          유트하(유튜브, 트위치 하이라이트라는 뜻)
        </p>

        <input ref={urlInput} placeholder="URL을 입력해주세요" onChange={onChangeUrl} id='link' />
        <h3>URL : {url}</h3>
        <button onClick={sendUrl}>보내기 버튼</button>
        <button onClick={getMethod}>get method 버튼</button>
        <button onClick={removeUrl}>주소 삭제</button>
      </div>
    </div>
  );
};
