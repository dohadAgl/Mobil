import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RefreshPageButton = ({ refreshPage }) => {
    const deviceWidth = Dimensions.get('window').width;
    return (
        <TouchableOpacity
            onPress={refreshPage}
            style={styles.refreshPageBtn}>
            <MaterialCommunityIcons name='autorenew' size={23} color="white" />
            <Text style={{
                textAlign: 'center',
                fontSize: deviceWidth * 0.035,
                fontWeight: 600,
                color: 'white',
                padding: 5,
            }}>Yenile</Text>
        </TouchableOpacity>
    )
}

export default RefreshPageButton

const styles = StyleSheet.create({
    refreshPageBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        borderRadius: 5,
        backgroundColor: 'orange'
    },
})