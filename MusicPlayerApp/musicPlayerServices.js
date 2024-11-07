import TrackPlayer from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setupPlayer () {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack()
    } catch (error) {
        
    }finally{
        return isSetup;
    }
} 

export async function playbackService () {
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext())
    TrackPlayer.addEventListener(Event.RemotePlrevious, () => TrackPlayer.skipToPrevious())
}