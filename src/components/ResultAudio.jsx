import { useEffect } from 'react';
import useResult from '../hooks/useResult';

export default function ResultAudio() {
	const { result, audio, video, chat } = useResult();
	const { setResult, audioToObj, videoToObj, chatToObj } = useResult();
	console.log('audio', audio);
	// const objAudio = audio && audio.map((value, index) => ({'time': index, 'peak': value}));

	// useEffect(() => {
	// 	audioToObj(result.audio);
	// }, [audioToObj, result]);
	return (
		<div>
			{audio}
		</div>
	);
};