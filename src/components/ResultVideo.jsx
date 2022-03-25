import useResult from '../hooks/useResult';

export default function ResultVideo() {
    const { result, audio, video, chat } = useResult();
    const { setResult, audioToObj, videoToObj, chatToObj } = useResult();
	console.log('video', video);
	// const objVideo = video && video.map((value, index) => ({'time': index, 'peak': value}));
	return (
		<div>
	        {video}
		</div>
  );
};