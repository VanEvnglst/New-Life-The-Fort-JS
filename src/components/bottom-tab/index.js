import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ height: '12%', borderWidth: 0.5, padding: 20, backgroundColor: "#FFF" }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          const TabIcon = () => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  width: 24,
                  height: 24,
                  borderRadius: 24 /2,
                  backgroundColor: 'gray',
                  marginBottom: 10,
                }}
              />
            )
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              accessibilityRole='button'
              style={{ alignItems: 'center', bottom: 10,}}
            >
              <TabIcon/>
              <Text>{route.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default BottomTabBar;