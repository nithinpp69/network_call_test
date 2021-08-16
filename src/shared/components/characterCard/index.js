import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { rw } from '@shared/utils/responsive';
import CharacterCardItem from '@components/characterCardItem';

const CharacterCard = ({ name, height, mass, birth_year, onPress }) => {
	return (
		<TouchableOpacity style={styles.itemContainer} onPress={onPress} activeOpacity={0.7}>
			<CharacterCardItem
				label={'Name'}
				value={name}
			/>
			<CharacterCardItem
				label={'Height'}
				value={height}
			/>
			<CharacterCardItem
				label={'Mass'}
				value={mass}
			/>
			<CharacterCardItem
				label={'Birth Year'}
				value={birth_year}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		width: rw(90),
		borderColor: 'rgba(255,255,255,0.5)',
		margin: 12,
		borderWidth: 1.5,
		justifyContent: 'center',
		padding: 12,
		borderRadius: 5,
		alignSelf:'center'
	}
})

export default memo(CharacterCard);