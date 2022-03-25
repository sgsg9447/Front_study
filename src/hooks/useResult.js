import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useResult() {
    const { result, setResult, audio, video, chat, setAudio, setVideo, setChat, audioToObj, videoToObj, chatToObj } = useContext(AppStateContext);

    return { result, setResult, audio, video, chat, setAudio, setVideo, setChat, audioToObj, videoToObj, chatToObj };
}