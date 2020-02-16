import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import { mutateRGB, generateRGB } from '../../utilities/Color';

export default function Game() {

    const [points, setPoints] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [rgb, setRgb] = useState(generateRGB());
    const [size, setSize] = useState(2);
    const [diffTileIndex, setDiffTileIndex] = useState([]);
    const [diffTileColor, setDiffTileColor] = useState('');

    const { width } = Dimensions.get("window");

    // let timeInterval = setInterval(() => {
    //     setTimeLeft(timeLeft - 1);
    // }, 1000);

    useEffect(() => {

        generateNewRound();
        // return () => {
        //     console.log('entrei');
        //     clearInterval(timeInterval);
        // };

    }, []);

    generateSizeIndex = size => {
        return Math.floor(Math.random() * size);
    };
       
    generateNewRound = () => {
        const RGB = generateRGB();
        const mRGB = mutateRGB(RGB);
        let size = Math.min(Math.max(Math.floor(Math.sqrt(points)), 2), 5);
    
        setSize(size);
        setDiffTileColor(`rgb(${mRGB.r}, ${mRGB.g}, ${mRGB.b})`);
        setRgb(RGB);
        setDiffTileIndex([generateSizeIndex(size), generateSizeIndex(size)]);
    
    };

    onTilePress = (rowIndex, columnIndex) => {

        if(rowIndex == diffTileIndex[0] && columnIndex == diffTileIndex[1]) {
          // good tile
          setPoints(points + 1);
          setTimeLeft(timeLeft + 2);
          generateNewRound();
        } else {
          // wrong tile
          setTimeLeft(timeLeft - 2);
        }
    }

    return (
        <SafeAreaView style= {styles.container}>
            <Header fontSize="40" />

            <View style={{ height: width * 0.875, width: width * 0.875, flexDirection: 'row' }}>
            
                {Array(size).fill().map((val, columnIndex) => (
                    <View style={{ flex: 1, flexDirection: 'column' }} key={columnIndex}>
                        {Array(size).fill().map((val, rowIndex) => (
                            <TouchableOpacity
                                key={`${rowIndex}.${columnIndex}`}
                                style={{
                                    flex: 1,
                                    backgroundColor: rowIndex == diffTileIndex[0] && columnIndex == diffTileIndex[1] ? diffTileColor : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
                                    margin: 2
                                }}
                                onPress={() => onTilePress(rowIndex, columnIndex)}
                                />
                        ))}
                    </View>
                ))}

            </View>

            <View style={styles.bottomContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.counterCount}>
                        {points}
                    </Text>
                    <Text style={styles.counterLabel}>
                        points
                    </Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text>
                        (...)
                    </Text>
                </View>
                
                <View style={{ flex: 1 }}>
                    <Text style={styles.counterCount}>
                        {timeLeft}
                    </Text>
                    <Text style={styles.counterLabel}>
                        seconds left
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );
}
