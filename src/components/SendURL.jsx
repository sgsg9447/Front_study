// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function sendUrl(e) {
// 	console.log('call sendUrl()')
// 	if (inputValue && inputValue.value) {
// 		console.log("인풋창 입력값 : ", inputValue.value);

// 		// goLording();
// 		axios.post('http://localhost:5000/flask/hello',
// 			{
// 				'url': inputValue.value,
// 			}).then(response => {
// 				const result = response.data;
// 				console.log("Success", result);
// 				const audio = result.result.audio;
// 				const chat = result.result.chat;
// 				const video = result.result.video;
// 				console.log(audio);
// 				console.log(chat);
// 				console.log(video);

// 			}).catch(error => {
// 				console.log(error);
// 				goNotFound();
// 			})

// 		goResult();
// 	}
// };
