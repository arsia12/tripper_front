import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>TRIPPER</Text>
            </View>
            <View>
                <Text>이미지</Text>
            </View>
            <TouchableOpacity>
                <Text>시작하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        flexDirection: 'column'
    }
})

export default HomeScreen;