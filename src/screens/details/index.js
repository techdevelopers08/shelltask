import React, { useEffect, useState } from "react";
import { SafeAreaView, ImageBackground, Dimensions, Image, View, Text, TouchableOpacity } from "react-native";
import { ThemeColors } from "../../utils";
import styles from "./style";
import Logo from '../../assets/images/logo.svg'
import Search from '../../assets/images/search.svg'
import Icon from "../../assets/images/Icon.svg"
import Backbtn from '../../assets/images/Back Button.svg'
import Btn from '../../assets/images/Btn.svg'
const { width, height } = Dimensions.get('window')
const DetailScreen = ({ navigation, route }) => {
    const [timerVal, setTime] = useState(0)

    const [timerStop, setTimerStop] = useState(false)

    function timer() {
        setTimeout(() => {
            setTime(timerVal + 1)
        }, 1000)
   
    }

    useEffect(() => {
        if (!timerStop) {
            timer()
        }
    }, [timerVal])


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground
                source={require('../../assets/images/BG.png')}
                style={{
                    width: width, alignSelf: "center", height: 200, justifyContent: "center",
                }}>
                <View style={{ flexDirection: 'row', top: 25, width: width - 30, alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ zIndex: 10, position: 'absolute', left: 20 }}>
                        <Backbtn width={24} height={24} />
                    </TouchableOpacity>

                    <Text style={{ alignSelf: "center", fontSize: 21, fontWeight: '700', color: ThemeColors.black, width: '100%', textAlign: 'center' }}> Details</Text>

                </View>



            </ImageBackground>

            <View style={{ position: 'absolute', width: width, height: height - 220, bottom: 0, backgroundColor: ThemeColors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ fontSize: 21, fontWeight: "700", color: ThemeColors.black, padding: 30 }} >Station Subscribed</Text>

                <View style={{ width: '90%', backgroundColor: ThemeColors.white, borderRadius: 25, height: 200, borderWidth: 0, elevation: 10, alignSelf: 'center', flexDirection: 'row' }}>

                    <View style={{ width: '50%', height: '100%', padding: 30 }}>

                        <Text style={{ fontSize: 16, fontWeight: '600', color: ThemeColors.black }}>ACTIVE FROM</Text>

                        <View style={{ height: 70, flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ color: ThemeColors.black, fontSize: 36, fontWeight: '700' }}>{timerVal}</Text>
                            <Text style={{ color: ThemeColors.black, fontSize: 11, fontWeight: '600', left: 5 }}>seconds</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: ThemeColors.black, fontSize: 11, fontWeight: '600' }}>MORE INFO</Text>
                            <Btn style={{ left: 10 }} />

                        </View>

                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignSelf: 'center' }}>

                        {/* {
                            !timerStop ? */}

                                <TouchableOpacity onPress={() => setTimerStop(true)} style={{ alignSelf: "center", width: 90, height: 27, backgroundColor: ThemeColors.red, borderRadius: 12, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.white, alignSelf: 'center', justifyContent: "center" }}>Stop</Text>
                                </TouchableOpacity>
                                {/* :
                                <TouchableOpacity onPress={() => setTimerStop(false)} style={{ alignSelf: "center", width: 90, height: 27, backgroundColor: ThemeColors.red, borderRadius: 12, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.white, alignSelf: 'center', justifyContent: "center" }}>Start</Text>
                                </TouchableOpacity> */}
                        {/* } */}
                    </View>

                </View>












            </View>





        </SafeAreaView>
    )
}
export default DetailScreen