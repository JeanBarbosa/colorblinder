import React, {useState} from 'react';
import { View } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import { mutateRGB, generateRGB } from '../../utilities/Color';

export default function Game() {

    const [points, setPoints] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);

    return (
        <View style= {styles.container}>
            <Header fontSize="34" />
        </View>
    );
}
