import React, { useState, useMemo, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function Home(props) {
  const container = useRef(null);
  const onMessageReceived = (data) => {

  };
  const onLoadStart = (event) => {};
  const onLoadEnd = (event) => {};
  const onError = (error) => {
    if (error) webViewRef.current.reload();

  };


  const Push = () => {
  }
const test = () => {
    console.log(container);
}
useEffect(() => {
    
},[])
  return (
    <View>
        <View style={{position:'absolute', top: 20, left: 5, zIndex:99}}>
            <TouchableOpacity onPress={() => {
                console.log(container.current);
                container.current.goBack();
            }}>
                <Text>Назад</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.container}>
        <WebView
          ref={container}
          allowFileAccess={true}
          originWhitelist={["*"]}
          allowUniversalAccessFromFileURLs={true}
          geolocationEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          cacheEnabled={true}
          source={{ uri: "https://ticket4concert.com" }}
          javaScriptEnabled={true}
          onMessage={onMessageReceived}
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          domStorageEnabled={true}
          onError={onError}
          startInLoadingState={true}
          useWebKit={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
});
