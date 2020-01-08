import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Linking } from 'react-native';

import ticket from '../img/ticket.png';

const Home = props => {

    let url = 'https://www.eventbrite.ca/e/toronto-music-expo-tickets-63003798056';
    return (
        <View>
            <View style={styles.textHeader}>
                <Text style={styles.text}>SATURDAY JANUARY 25, 2020</Text>
                <Text style={styles.text}>MISSISSAUGA CONVENTION CENTRE </Text>
                <Text style={styles.text}>11:00 a.m. - 4:00 p.m.</Text>

            </View>

            <View>
                <View>
                    <TouchableHighlight onPress={() => Linking.openURL(url)} style={styles.ticket}>
                        <Image source={ticket} />
                    </TouchableHighlight>
                </View>
            </View>

            <View>
                <View style={styles.textInf}>
                    <Text style={styles.textColor} >ALL AGES WELCOME! </Text>
                </View>

                <View style={styles.textAlign}>
                    <Text style={styles.text}>4th annual event presented by</Text>
                    <Text style={styles.url} onPress={() => Linking.openURL('https://www.generalmayhem.ca/')}>generalmayhem.ca</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    text: {
        color: 'black',
        paddingTop: 10,
        fontWeight: 'bold'
    },
    textColor: {
        color: '#b7121b',
        fontWeight: 'bold'
    },
    textInf: {
        color: 'white',
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAlign: {
        alignSelf: 'center',
        paddingBottom: 20
    },
    url: {
        paddingLeft: 40,
        fontWeight: 'bold',
        paddingBottom: 20

    },
    ticket: {
        alignSelf: 'center',
        padding: 30
    }
});

export default Home;