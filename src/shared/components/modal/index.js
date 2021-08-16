import React, { useCallback } from 'react';
import { Modal, StyleSheet, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { rw, rf } from '@shared/utils/responsive';
import CharacterCardItem from '@shared/components/characterCardItem';
import Spacer from '@shared/components/spacer';

const CharacterDetailsModal = ({ isVisible = false, loading, details, onRequestClose }) => {

    if (isVisible)
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                presentationStyle={'overFullScreen'}
                statusBarTranslucent={true}
                onRequestClose={onRequestClose}
            >
                <View style={styles.container}>
                    {loading ?
                        <ActivityIndicator size={'large'} color={'white'} />
                        :
                        <>
                            <CharacterCardItem
                                label={'Name'}
                                value={details?.name || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Height'}
                                value={details?.height || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Height'}
                                value={details?.height || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Mass'}
                                value={details?.mass || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Hair Color'}
                                value={details?.hair_color || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Skin Color'}
                                value={details?.skin_color || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Eye Color'}
                                value={details?.eye_color || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Gender'}
                                value={details?.gender || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'created'}
                                value={new Date(details?.created).toDateString() || ''}
                            />
                            <Spacer height={rw(2.5)} />
                            <CharacterCardItem
                                label={'Edited'}
                                value={new Date(details?.edited).toDateString() || ''}
                            />
                        </>
                    }
                    <TouchableOpacity style={styles.closeButton} activeOpacity={0.6} onPress={onRequestClose}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: rw(100),
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
    },
    instructionText: {
        fontSize: rf(1.7),
        textAlign: 'center',
        fontFamily: 'Ubuntu-Bold'
    },
    closeButton: {
        width: rw(12),
        height: rw(12),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: rw(6),
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: rf(2.0),
    }
});

export default CharacterDetailsModal;