import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react';
import { View, StyleSheet, Animated, Image, Easing } from 'react-native';
import Images from './assets/images/Images';
import * as RNSplashScreen from 'expo-splash-screen';

RNSplashScreen.preventAutoHideAsync();

const SplashScreen = () => {
  const animation = useMemo(() => new Animated.Value(1), []);
  const backgroundFade = useRef(new Animated.Value(0)).current;
  // const logoFade = useRef(new Animated.Value(0)).current;
  // const logoMovement = useRef(new Animated.Value(0)).current;
  const [isAppReady, setAppIsReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
    Animated.timing(backgroundFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(animation, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start(() => setAnimationComplete(true));
  }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    await RNSplashScreen.hideAsync();
    setAppIsReady(true);

  })
  return (
    <View style={{ flex: 1 }}>
      {/* {isAppReady && children} */}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents='none'
          style={[
            StyleSheet.absoluteFill,
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              opacity: backgroundFade
            }
          ]}
        >
          <Animated.Image
            style={{
              height: '50%', 
              
              transform: [
                {
                  scale: animation,
                }
              ]
            }}
            resizeMode='contain'
            source={Images.logoWhite}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}

    </View>
  )


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: 'black',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     opacity: backgroundFade
  //   },
  //   logo: {
  //     height: '50%',
  //     // opacity: logoFade,
  //   }
  // })

  // return (
  //   <Animated.View style={styles.container}>
  //     <Image
  //       source={Images.logoWhite}
  //       resizeMode='contain'
  //       style={styles.logo}
  //     />
  //   </Animated.View>
  // )

};

export default SplashScreen;




