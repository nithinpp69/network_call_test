import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '@src/dashboard/style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getStarWarsList, getStarWarsDetails } from '../services';
import CharacterCard from '@components/characterCard';
import getId from '@shared/utils/getId';
import CharacterDetailsModal from '@shared/components/modal';

const Dashboard = () => {

    const dispatch = useDispatch();
    const star_wars = useSelector(state => state.dashboard.star_wars, shallowEqual);
    const star_wars_details = useSelector(state => state.dashboard.star_wars_details, shallowEqual);

    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        dispatch(getStarWarsList());
    }, []);

    const fetchCharacterDetails = (profile_url) => {
        const id = getId(profile_url);
        if (id)
            dispatch(getStarWarsDetails(id));
        setShowDetails(true);
    }

    const renderStarWars = ({ item }) => {
        return (
            <CharacterCard
                name={item?.name}
                height={item?.height}
                mass={item?.mass}
                birth_year={item?.birth_year}
                onPress={() => fetchCharacterDetails(item?.url)}
            />
        );
    };

    const onRequestClose = () => {
        setShowDetails(false);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={star_wars?.response?.results || []}
                showsVerticalScrollIndicator={false}
                renderItem={renderStarWars}
                keyExtractor={item => item.url}
            />
            <CharacterDetailsModal
                isVisible={showDetails}
                loading={star_wars_details?.loading}
                details={star_wars_details?.response}
                onRequestClose={onRequestClose}
            />
        </View>
    )
};

export default Dashboard;