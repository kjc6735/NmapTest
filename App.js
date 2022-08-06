import React, {useEffect} from 'react';
import {Alert, Linking, Platform, Text, View} from 'react-native';
import NaverMapView from 'react-native-nmap';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

function App() {
  return (
    <View style={{flex: 1}}>
      <NaverMapView style={{flex: 1}} />
    </View>
  );
}

export default App;
