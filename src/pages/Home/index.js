import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import Hiscore from '../../components/Hiscore';
import Copyright from '../../components/Copyright';

export default function Home() {

    onPlayPress = () => {
        console.log('onplay');
    }

    handleLeaderboard = () => {

    }

    return (           
        <View style={styles.container}>
            <Header />
            
            <TouchableOpacity 
                onPress={onPlayPress}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                
                <Image 
                    source={require('../../../assets/icons/play_arrow.png')}
                    style={styles.playIcon}
                />

                <Text style={styles.play}>PLAY!</Text>

            </TouchableOpacity>

            <Hiscore />

            <TouchableOpacity
                onPress={handleLeaderboard}
                style={{flexDirection: 'row', alignItems: 'center'}} 
            >
                <Image 
                    source={require('../../../assets/icons/leaderboard.png')}
                    style={styles.leaderboard}
                />

                <Text style={styles.leaderboardTitle}>Leardboard</Text>

            </TouchableOpacity>

            <Copyright></Copyright>

        </View>
    );

}