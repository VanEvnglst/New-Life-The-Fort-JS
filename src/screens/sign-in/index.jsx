import React, { useMemo, useEffect, useRef, useState } from 'react';
import { View, Text, Animated, TextInput, SafeAreaView, TouchableOpacity, Easing } from 'react-native';
import Images from '../../assets/images/Images';

const SignIn = props => {
  const { navigation } = props;
  const logoMovement = useRef(new Animated.Value(146)).current;
  const signInFade = useRef(new Animated.Value(0)).current;
  const signInScale = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(logoMovement, {
        toValue: -120,
        duration: 2000,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, 2250)
    setTimeout(() => {
      Animated.timing(signInScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(signInFade, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }, 4500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#FCFCFB'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          source={Images.logoBlack}
          resizeMode='contain'
          style={{ height: '50%',
            transform: [
              { translateY: logoMovement }
            ]
          }}
        />
        <Animated.View 
          style={{
            height: '40%',
            width: '90%',  
            opacity: signInFade,
            transform: [
              {
                scale: signInScale
              }
            ]
          }}>
          {/* <TextInput
            style={{ borderWidth: 0.3, height: 45, padding: 4, borderRadius: 6}}
            placeholder='Email'
          />
          <TextInput
            style={{ borderWidth: 0.3, height: 45, marginTop: 20, padding: 4, borderRadius: 6 }}
            placeholder='Password'
            secureTextEntry
          /> */}
          <TouchableOpacity
           style={{ borderRadius: 6, backgroundColor: 'rgb(103, 130, 169)', marginTop: 30, height: 55, justifyContent: 'center', alignItems: 'center' }}
           accessibilityRole='button'
           onPress={() => navigation.navigate('Main')}
           >
            <Text style={{ color: 'white', fontSize: 20, fontWeight:'600'}}>SIGN UP</Text>

           </TouchableOpacity>

           <TouchableOpacity
           style={{ borderRadius: 6, backgroundColor: 'rgb(103, 130, 169)', marginTop: 30, height: 55, justifyContent: 'center', alignItems: 'center' }}
           accessibilityRole='button'
           onPress={() => navigation.navigate('Main')}
           >
            <Text style={{ color: 'white', fontSize: 20, fontWeight:'600'}}>SIGN IN</Text>

           </TouchableOpacity>

        </Animated.View>
      </View>
       
      
    </SafeAreaView>
  )
}

export default SignIn;
