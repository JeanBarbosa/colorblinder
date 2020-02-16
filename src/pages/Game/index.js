import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
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

    return (
        <View style= {styles.container}>
            <Header fontSize="34" />
            <Text style={{color: '#fff'}}>{timeLeft}</Text>

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
                                onPress={() => console.log(rowIndex, columnIndex)}
                            />
                        ))}
                    </View>
                ))}

            </View>
        </View>
    );
}
