import { View, Text, Pressable, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const FilterButton = ({setModalVisible}) => {
    const deviceWidth = Dimensions.get('window').width;
    return (
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={setModalVisible}>
            <MaterialCommunityIcons name='filter-outline' size={20} color='white' />
            <Text style={{
                textAlign: 'center',
                fontSize: deviceWidth * 0.035,
                fontWeight: 600,
                color: 'white',

            }}>Filtrele</Text>
        </Pressable>
    )
}

export default FilterButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 5,
        elevation: 2,
        height: 40,
        justifyContent: 'center'
    },
    buttonOpen: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
})