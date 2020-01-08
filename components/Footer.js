import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Linking } from 'react-native';

import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';


const Footer = props => {
    return (
        <View style={styles.footerView}>
            
            <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/mississaugamusicexpo/')}>
                <Image
                    source={facebook}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://twitter.com/saugamusic?lang=en')}>
                <Image
                    source={twitter}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/torontomusic_expo/')}>
                <Image
                    source={instagram}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.linkedin.com/groups/12006603/')}>
                <Image
                    source={linkedin}
                />
            </TouchableHighlight>

            
        </View>
    );
};

const styles = StyleSheet.create({
    footerView: {
        flexDirection: 'row',
        color: 'white',
        padding: 10,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 20
    }
});

export default Footer;