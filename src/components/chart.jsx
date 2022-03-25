import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { LineChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

function App() {
  let [data, setData] = useState();

  const [url, setUrl] = useState("URL : ");
  const inputValue = document.getElementById("link");

  function onChangeUrl(e) {
    console.log("call onChangeUrl()");
    if (e.target.value.indexOf("youtube") !== -1) {
      console.log("This is Youtube link");
      //  app header class 값을 변경
    }
    setUrl("URL : " + e.target.value);
  }

  function sendUrl(e) {
    console.log("call sendUrl()");
    if (inputValue) {
      console.log("인풋창 입력값 : ", inputValue.value);
      axios
        .post("http://192.249.28.112:5000/flask/hello", {
          url: inputValue.value,
        })
        .then((response) => {
          console.log("Success", response.data);
          const raw = response.data["result"]["chat"];
          console.log(raw);
          const tmp = raw.map((value, index) => ({ time: index, chat: value }));
          console.log(tmp);
          setData(tmp);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function getMethod(e) {
    console.log("call getMethod()");
    axios
      .get("http://192.249.28.112:5000/flask/hello")
      .then((response) => {
        console.log("Success", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>유트하(유튜브, 트위치 하이라이트라는 뜻)</p>

        <input onChange={onChangeUrl} id="link" />
        <h3>{url}</h3>
        <button onClick={sendUrl}>버튼</button>

        <button onClick={getMethod}>get method 버튼</button>
      </header>

      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="chat" />
      </LineChart>
    </div>
  );
}

export default App;