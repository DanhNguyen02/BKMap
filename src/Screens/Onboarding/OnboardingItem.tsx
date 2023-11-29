import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Slide } from '@/Localization/Type'

export const OnboardingItem = (item: Slide) => {
    return (
        <View style={styles.container}>
            <Text>Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});