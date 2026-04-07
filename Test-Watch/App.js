import React, { useEffect, useState } from 'react'
import { 
  Alert,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity, 
  View,
  Image
} from 'react-native';
import {
  sendMessage,
  useReachability,
  usePaired,
  useInstalled,
} from 'react-native-watch-connectivity';



function App() {
  const reachable = useReachability();
  const paired = usePaired();
  const installed = useInstalled();

  return (
        <ImageBackground
  source={{ uri: 'https://i.pinimg.com/236x/d8/94/bc/d894bc6ca809831f2cef5f785ad8f8ac.jpg' }}
  style={styles.background}
  resizeMode="cover"
>
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>Teste no relógio da silva</Text>
      
      <Text style={{ color: 'white' }}>Reachable: {reachable ? 'Sim' : 'Não'}</Text>
      <Text style={{ color: 'white' }}>Paired: {paired ? 'Sim' : 'Não'}</Text>
      <Text style={{ color: 'white' }}>Installed: {installed ? 'Sim' : 'Não'}</Text>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffff',
  },
  background: {
  flex: 1,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},
});

// ✅ Exportação correta
export default App;