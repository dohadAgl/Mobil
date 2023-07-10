import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    Modal,
    Pressable,
    Switch
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import DetailReviewButton from '../components/DetailReviewButton';
import RefreshPageButton from '../components/RefreshPageButton';
import FilterButton from '../components/FilterButton';
import { getBackgroundColor, getItemBGColor } from '../utils/magnitudeColors'

const AfadDataPage = () => {

    const navigation = useNavigation();
    const DepremDetaySayfasi = (item) => {
        navigation.navigate('DetailAfadData', { item });
    };

    const deviceWidth = Dimensions.get('window').width;
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabledTwoAndUp, setIsEnabledTwoAndUp] = useState(false);
    const [isEnabledThreeAndUp, setIsEnabledThreeAndUp] = useState(false);
    const [isEnabledFourAndUp, setIsEnabledFourAndUp] = useState(false);
    const [isEnabledFiveAndUp, setIsEnabledFiveAndUp] = useState(false);
    const [myMl, setMyMl] = useState('');
    const [myData, setMyData] = useState([]);


    const afadVerileriGet = async () => {
        const currentTime = new Date(); // Güncel tarih ve saat bilgisini al
        const twelveHoursAgo = new Date(currentTime.getTime() - 12 * 60 * 60 * 1000); // 12 saat öncesini hesapla
        const start = twelveHoursAgo.toISOString();
        const end = currentTime.toISOString();
        const url = `https://deprem.afad.gov.tr/apiv2/event/filter?start=${start}&end=${end}`;
        try {
            const response = await axios.get(url);
            const veri = response.data;
            setMyData(veri.reverse());
            console.log("afad verisi myData: ", myData[0])
        } catch (error) {
            console.error('afad verileri alınamadı:', error);
        }
    }

    useEffect(() => {
        afadVerileriGet();
    }, []);

    /*------2 ve üstü büyüklük filtresi------------ */
    const twoAndUpToggleSwitch = async () => {
        const newEnabledState = !isEnabledTwoAndUp;
        setIsEnabledTwoAndUp(newEnabledState);
        try {
            if (newEnabledState) {
                setMyMl('2')
            } else {
                setMyMl('')
            }
        } catch (error) {
            console.log('Error while storing state:', error);
        }
    }
    /*------2 ve üstü büyüklük filtresi------------ */

    /*------3 ve üstü büyüklük filtresi------------ */
    const threeAndUpToggleSwitch = async () => {
        const newEnabledState = !isEnabledThreeAndUp;
        setIsEnabledThreeAndUp(newEnabledState);
        try {
            if (newEnabledState) {
                setMyMl('3')
            } else {
                setMyMl('0')
            }
        } catch (error) {
            console.log('Error while storing state:', error);
        }
    }
    /*------3 ve üstü büyüklük filtresi------------ */

    /*------4 ve üstü büyüklük filtresi------------ */
    const fourAndUpToggleSwitch = async () => {
        const newEnabledState = !isEnabledFourAndUp;
        setIsEnabledFourAndUp(newEnabledState);
        try {
            if (newEnabledState) {
                setMyMl('4')
            } else {
                setMyMl('')
            }
        } catch (error) {
            console.log('Error while storing state:', error);
        }
    }
    /*------4 ve üstü büyüklük filtresi------------ */

    /*------5 ve üstü büyüklük filtresi------------ */
    const fiveAndUpToggleSwitch = async () => {
        const newEnabledState = !isEnabledFiveAndUp;
        setIsEnabledFiveAndUp(newEnabledState);
        try {
            if (newEnabledState) {
                setMyMl('5')
            } else {
                setMyMl('')
            }
        } catch (error) {
            console.log('Error while storing state:', error);
        }
    }
    /*------5 ve üstü büyüklük filtresi------------ */


    const refreshPage = () => {
        console.log('verileri yenile butonu çalıştı');
        afadVerileriGet();
    };


    const renderItem = ({ item }) => {
        const dateTime = new Date(item.date);
        const date = dateTime.toLocaleDateString('tr-TR');
        const time = new Date(dateTime.getTime() + 3 * 60 * 60 * 1000).toLocaleTimeString('tr-TR');
        if (Number(item.magnitude) >= Number(myMl)) {
            return (
                <View style={{
                    width: '100%',
                    height: 80,
                    backgroundColor: getItemBGColor(item.magnitude),
                    borderRadius: 5,
                    paddingRight:10,
                    marginVertical: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: getBackgroundColor(item.magnitude),
                        width: '10%',
                        height: 80,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* <Text style={{
                            color: 'white',
                            fontSize: deviceWidth * 0.026,
                            fontFamily: 'Roboto'
                        }}>Büyüklük
                        </Text> */}
                        <Text style={{
                            fontSize: deviceWidth * 0.044,
                            color: 'white',
                            fontFamily: 'Roboto'
                        }}>
                            {item.magnitude}
                        </Text>
                    </View>
                    <View style={{
                        width: '80%',
                        height: 80,
                        marginLeft: 5,
                        justifyContent: 'center',
                        // flexDirection:'row'
                    }}>
                        <View style={{marginBottom:4}}>
                            <Text style={styles.textStyle}>
                                <Ionicons name='ios-location-outline' size={20} />{item.location}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{paddingLeft:4}}>
                                <Ionicons name='calendar-outline' size={24}/>
                            </View>
                            <Text style={styles.textStyle}>{date}</Text>
                            <View style={{paddingLeft:10}}>
                                <MaterialCommunityIcons name='clock-outline' size={24} />
                            </View>
                            <Text style={styles.textStyle}>{time}</Text>
                            <View style={{paddingLeft:10, paddingRight:4}}>
                            {/* <FontAwesome5 name='ruler-vertical' size={16} /> */}
                            <Octicons name='fold-down' size={24} />
                            </View>
                            <Text style={styles.textStyle} >
                                {item.depth} km
                            </Text>
                        </View>
                    </View>
                    <DetailReviewButton detailPage={() => DepremDetaySayfasi(item)} />
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    };

    const modalFilterBox = (bool1, bool2, bool3, tSwitch, bool4, buyukluk) => {
        if (bool1 && (bool2 && bool3)) {
            return (
                <View
                    style={styles.filterList}>
                    <Text style={styles.textStyle}>{`${buyukluk} ve üstü`}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={bool4 ? '#f4f3f4' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={tSwitch}
                        value={bool4}
                    />
                </View >
            )
        } else {
            return (
                <View
                    style={styles.filterList}>
                    <Text style={{ textDecorationLine: 'line-through' }}>{`${buyukluk} ve üstü`}</Text>
                </View >
            )
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.headerArea}>
                <View style={{ width: '20%' }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={[styles.textStyle, styles.modalText]}>Büyüklüğe Göre Filtrele</Text>
                                {
                                    modalFilterBox(
                                        !isEnabledThreeAndUp,
                                        !isEnabledFourAndUp,
                                        !isEnabledFiveAndUp,
                                        twoAndUpToggleSwitch,
                                        isEnabledTwoAndUp,
                                        2
                                    )
                                }
                                {
                                    modalFilterBox(
                                        !isEnabledTwoAndUp,
                                        !isEnabledFourAndUp,
                                        !isEnabledFiveAndUp,
                                        threeAndUpToggleSwitch,
                                        isEnabledThreeAndUp,
                                        3
                                    )
                                }
                                {
                                    modalFilterBox(
                                        !isEnabledTwoAndUp,
                                        !isEnabledThreeAndUp,
                                        !isEnabledFiveAndUp,
                                        fourAndUpToggleSwitch,
                                        isEnabledFourAndUp,
                                        4
                                    )
                                }
                                {
                                    modalFilterBox(
                                        !isEnabledTwoAndUp,
                                        !isEnabledThreeAndUp,
                                        !isEnabledFourAndUp,
                                        fiveAndUpToggleSwitch,
                                        isEnabledFiveAndUp,
                                        5
                                    )
                                }
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: deviceWidth * 0.035,
                                            fontWeight: 600,
                                            color: 'white',
                                            fontFamily: 'Roboto'
                                        }}>Kapat
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <FilterButton setModalVisible={() => setModalVisible(true)} />
                </View>
                <View style={{
                    width: '36%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: deviceWidth * 0.044,
                        fontWeight: 600,
                        color: 'white',
                        padding: 5,
                    }}>AFAD Verileri
                    </Text>
                </View>
                <RefreshPageButton refreshPage={refreshPage} />
            </View>
            <FlatList
                initialNumToRender={9}
                windowSize={10}
                data={myData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default AfadDataPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerArea: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        // backgroundColor:'#0054a6'
        backgroundColor:'#333'
    },
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '500',
        color: '#27374D',
    },
    refreshPageBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        borderRadius: 5,
        backgroundColor: 'orange'
    },
    inceleBtn: {
        width: '20%',
        height: 60,
        borderRadius: 5,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        height: 400,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 36,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
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
    buttonClose: {
        backgroundColor: '#222',
        width: '100%',
        elevation: 2
    },
    modalText: {
        marginBottom: 14,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16
    },
    filterList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        elevation: 2
    },
})