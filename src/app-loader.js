import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Images from './assets/images/Images';
import SignIn from './screens/SignIn/sign-in';
import MainStack from './navigation/main-stack';
// Instruct SplashScreen not to hide
SplashScreen.preventAutoHideAsync();

export default function AppLoader() {
  return (
    <AnimatedLoader>
      <MainStack/>
    </AnimatedLoader>
  );
}

function AnimatedLoader({ children }) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // pre-load what you need here
      // await Asset.fromURI(image.uri).downloadAsync();
      setSplashReady(true)
    }

    prepare();
  }, []);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen>{children}</AnimatedSplashScreen>
}

function AnimatedSplashScreen({ children }) {
  const animation = useMemo(() => new Animated.Value(0), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady])

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();

      setAppReady(true);
    } catch (e) {
      // handle errors
    }
  }, []);

  return (
    <View style={{ flex: 1}}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents='none'
          style={[
            StyleSheet.absoluteFill,
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FCFCFB',
            }
          ]}
        >
          <Animated.Image
            style={{
              height: '45%',
              transform: [
                {
                  scale: animation,
                }
              ]
            }}
            resizeMode='contain'
            source={Images.logoBlack}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}