import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Logo from '../img/MusicExpo.png';

const Header = props => {
    return (
        <View>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30
    }
});

export default Header;