import React,{useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { setupPlayer, addTrack } from '../musicPlayerServices';


function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {

  }, [])

  if (!isPlayerReady) {
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
