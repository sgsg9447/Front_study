import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
	const [result, setResult] = useState();
	const [audio, setAudio] = useState();
	const [video, setVideo] = useState();
	const [chat, setChat] = useState();

	function audioToObj({raw}) {
		const newAudio = raw && raw.map((value, index) => { return {'time': index, 'value': value}})
		setAudio(newAudio);
	};


	// const audioToObj = useCallback((raw) => {
	// 	setAudio(raw.map((value, index) => { return {'time': index, 'value': value}}));
	// }, []);

	const videoToObj = useCallback((raw) => {
		setVideo(raw && raw.map((value, index) => { return {'time': index, 'value': value}}));
	}, []);

	const chatToObj = useCallback((raw) => {
		setChat(raw && raw.map((value, index) => { return {'time': index, 'value': value}}));
	}, []);

	return (
		<AppStateContext.Provider
			value={{
				result,
				audio,
				video,
				chat,
				setResult,
				setAudio,
				setVideo,
				setChat,
				audioToObj,
				videoToObj,
				chatToObj,
			}}>
			{children}
		</AppStateContext.Provider>
	);
};

export default AppStateProvider;