import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { rf } from '@shared/utils/responsive';

const CharacterCardItem = ({ label, value }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: rf(1.4),
        color: 'rgba(255,255,255,0.6)'
    },
    value: {
        fontSize: rf(1.8),
        fontWeight: '700'
    }
})

export default memo(CharacterCardItem);