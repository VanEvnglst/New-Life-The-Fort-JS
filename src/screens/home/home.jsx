import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const HomeScreen = () => {
  

  const event1 = {
    sharer: {
      sharerName: 'Alvin',
      dateShared: '1 May 2023',
      timeShared: '11:00 AM'
    },
    event: {
      title: 'Filipino Service',
      date: '21',
      month: 'May',
      time: '11:00 AM'
    }
  };

  const event2 = {
    sharer: {
      sharerName: 'Ida',
      dateShared: '1 May 2023',
      timeShared: '11:00 AM'
    },
    event: {
      title: 'VIP Orientation',
      date: '1',
      month: 'June',
      time: '5:00 PM'
    }
  };

  //TODO: Move this to a reusable component
  const EventCard = ({ event, sharer }) => {
    const [cardExpanded, setCardExpanded] = useState(false);
    const eventCardHeight = useRef(new Animated.Value(0)).current;
    const { sharerName, dateShared, timeShared } = sharer;
    const { title, date, month, time, likes, comments } = event;

    useEffect(() => {
      Animated.timing(eventCardHeight, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

    }, [cardExpanded])
    return (
      <TouchableOpacity
        key={title}
        onPress={() => setCardExpanded(!cardExpanded)}
      >
      <Animated.View style={[styles.eventContainer, {
       height: cardExpanded ? 260 : 160,
      }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: '#DEDEDE'}}/>
        <View style={{ flex: 1, marginHorizontal: 12,}}>
          <Text style={{ fontSize: 16, marginBottom: 4 }}>{sharerName} shared an event</Text>
          <Text style={{ fontSize: 12, fontWeight: '200' }}>{dateShared} at {timeShared}</Text>
        </View>
        <Entypo name={cardExpanded ? "chevron-up" : "chevron-down"} size={24} color="black" />
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 0.2, padding: 10, borderRadius: 6 }}
          >
            <Text style={{ marginBottom: 4 }}>{date}</Text>
            <Text style={{ color: 'red' }}>{month}</Text>
          </View>
          <View style={{ marginHorizontal: 12, }}>
            <Text style={{ fontSize: 16, marginBottom: 4, fontWeight: '600' }}>{title}</Text>
            <Text style={{ fontSize: 12, fontWeight: '200' }}>{date} {month} 2023 at {time}</Text>
          </View>

        </View>
      </Animated.View>
      </TouchableOpacity>
    )
  }

  
  return (
    <View style={styles.container}>
         <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1,}}
      >
      <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.headerContainer}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray', marginBottom: 8}}>Hi, Ivan!</Text>
            <Text style={{ fontSize: 24, fontWeight: '600'}}>Welcome Home!</Text>
          </View>
          <EventCard
            sharer={event1.sharer}
            event={event1.event}
          />
          <EventCard
            sharer={event2.sharer}
            event={event2.event}
          />
         
      </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFB',
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginVertical: 32
  },
  eventContainer: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 0.3,
    marginVertical: 12
  }
});