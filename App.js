import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableHighlight, Image, Text } from 'react-native';

import Header from './components/Header';
import Autograph from './components/Autograph';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Home from './components/Home';


import pen from './img/pen.png';
import sponsor from './img/sponsor.png';
import home from './img/home.png';

export default function App() {

  const [myContent, setMyContent] = useState(<Home />);

  const homeHandler = () => {
    //Alert.alert('hello 0');
    setMyContent(<Home />);
  };

  const autographHandler = () => {
    //Alert.alert('hello 1');
    setMyContent(<Autograph />);
  };

  const sponsorHandler = () => {
    //Alert.alert('hello 2');
    setMyContent(<Sponsors />);
  };

  return (
    <ScrollView style={styles.header}>
      <Header />
      <View style={styles.menu}>

        <View>
          <TouchableHighlight onPress={homeHandler} style={styles.icon}>
            <Image source={home} />
          </TouchableHighlight>
          <View>
            <Text style={styles.title} onPress={homeHandler}>HOME</Text>
          </View>
        </View>

        <View>
          <TouchableHighlight onPress={autographHandler} style={styles.icon}>
            <Image source={pen} />
          </TouchableHighlight>
          <View>
            <Text style={styles.title} onPress={autographHandler}>AUTOGRAPH</Text>
          </View>
        </View>

        <View>
          <TouchableHighlight onPress={sponsorHandler} style={styles.icon}>
            <Image source={sponsor} />
          </TouchableHighlight>
          <View>
            <Text style={styles.title} onPress={sponsorHandler}>SPONSORS</Text>
          </View>
        </View>

      </View>
      <View style={styles.body}>
        {myContent}
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e5494'
  },
  menu: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  },
  body: {
    backgroundColor: 'white'
  },
  title:{
    color: 'white',
    paddingTop: 5
  },
  icon:{
    alignSelf: 'center',
  }

});
