import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const DetailReviewButton = ({detailPage}) => {
    return (
        <TouchableOpacity
            style={styles.inceleBtn}
            onPress={detailPage}>
            {/* <Text style={{ fontSize: 16, color: '#333', fontFamily: 'Roboto' }}>İncele</Text> */}
            <Ionicons name="arrow-forward-sharp" size={26} color="#333" />
        </TouchableOpacity>
    )
}

export default DetailReviewButton

const styles = StyleSheet.create({
    inceleBtn: {
        width: '10%',
        height: 40,
        borderRadius: 5,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center'
    },
})