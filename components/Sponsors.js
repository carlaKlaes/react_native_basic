import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Linking} from 'react-native';

import exhibitor from '../img/exhibitor.png';

import GeneralMayhem from '../img/GeneralMayhem.png';
import AgoriaProductions from '../img/AgoriaProductions.png';
import TorontoJobs from '../img/TorontoJobs.png';
import MississaugaMusic from '../img/MississaugaMusic.png';
import CityofMississauga from '../img/CityofMississauga.png';
import TheSongCreationFormula from '../img/TheSongCreationFormula.png';
import TheHookandCo from '../img/TheHookandCo.png';
import CanadianCountryMusicInsider from '../img/CanadianCountryMusicInsider.png';
import OngoingHistoryofNewMusic from '../img/OngoingHistoryofNewMusic.png';
import VinylVault from '../img/VinylVault.png';
import OliveMedia from '../img/OliveMedia.png';
import ModernMississauga from '../img/ModernMississauga.png';
import DineAloneRecords from '../img/DineAloneRecords.png';
import RenewalbyAndersen from '../img/RenewalbyAndersen.png';


const Sponsors = props => {
    return (
        <View style={styles.titleView}>
            <Text style={styles.title}>2020 </Text>
            <Text style={styles.title}>Sponsors,</Text>
            <Text style={styles.title}>Exhibitors and Partners</Text>

            <View>
                <View>
                    <TouchableHighlight
                        onPress={() => Linking.openURL('https://www.eventbrite.ca/e/music-expo-tickets-63003798056#tickets')}
                        style={styles.buttonView}>
                        <Image source={exhibitor} />
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>PRESENTING SPONSOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.generalmayhem.ca/')}>
                    <Image source={GeneralMayhem} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EVENT SPONSOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('http://www.agoria.ca/')}>
                    <Image source={AgoriaProductions} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EVENT SPONSOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.torontojobs.ca/')}>
                    <Image source={TorontoJobs} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>SPECIAL THANKS</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.mississaugamusic.com/')}>
                    <Image source={MississaugaMusic} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EVENT PARTNER</Text>
                <TouchableHighlight onPress={() => Linking.openURL('http://www.mississauga.ca/portal/home')}>
                    <Image source={CityofMississauga} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EXHIBITOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.signemiranda.com/')}>
                    <Image source={TheSongCreationFormula} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EXHIBITOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.thehookandco.com/home')}>
                    <Image source={TheHookandCo} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EXHIBITOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://ctoccanadiancountrymusicinsider.com/')}>
                    <Image source={CanadianCountryMusicInsider} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>SPONSOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://ajournalofmusicalthings.com/')}>
                    <Image source={OngoingHistoryofNewMusic} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>THE RECORD CORNER</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.vinylvault.ca/')} style={styles.vinyl}>
                    <Image source={VinylVault} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>SPECIAL THANKS</Text>
                <TouchableHighlight onPress={() => Linking.openURL('http://www.mediaolive.ca/')}>
                    <Image source={OliveMedia} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>MEDIA PARTNER</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.modernmississauga.com/')}>
                    <Image source={ModernMississauga} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EVENT SPONSOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://dinealonerecords.com/')}>
                    <Image source={DineAloneRecords} />
                </TouchableHighlight>
            </View>

            <View style={styles.logo}>
                <Text style={styles.sponsorTitle}>EXHIBITOR</Text>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.renewalbyandersen.ca/')}>
                    <Image source={RenewalbyAndersen} />
                </TouchableHighlight>
            </View>

            <View style={styles.footer}>
                <Text style={styles.email}>Want to exhibit? </Text>
                <Text style={styles.email}
                    onPress={() => Linking.openURL('mailto:sales@generalmayhem.ca')}
                >sales@generalmayhem.ca </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b7121b'
    },
    logo: {
        paddingBottom: 30
    },
    sponsorTitle: {
        fontSize: 15,
        paddingTop: 30,
        paddingBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    site: {
        fontSize: 15,
        paddingTop: 10,
        alignSelf: 'center'
    },
    footer: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    email: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10
    },
    buttonView: {
        padding: 20
    },
    vinyl:{
        paddingLeft: 7
    }

});

export default Sponsors;