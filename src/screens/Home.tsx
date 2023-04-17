import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Home = () => {

    const dispatch = useDispatch();

    const count = useSelector((store: any) => store.count.count);

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // };

    // const decrement = () => {
    //     setCount(count - 1);
    // };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Content title="Counter App" titleStyle={styles.appbarTitle} />
            </Appbar.Header>
            <View style={styles.contentContainer}>
                <Text style={styles.countText}>Count: {count}</Text>
                <View style={styles.buttonContainer}>
                    <Button textColor='#663399' mode="contained" onPress={handleDecrement} style={styles.decButton}>
                        Decrement
                    </Button>
                    <Button mode="contained" onPress={handleIncrement} style={styles.incButton}>
                        Increment
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appbar: {
        backgroundColor: '#663399',
        elevation: 0,
        color: 'white'
    },
    appbarTitle: {
        color: 'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    countText: {
        fontSize: 24,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    decButton: {
        borderWidth: 2,
        borderColor: '#663399',
        marginHorizontal: 8,
        minWidth: 120,
        backgroundColor: 'white'
    },
    incButton: {
        marginHorizontal: 8,
        minWidth: 120,
    },
});