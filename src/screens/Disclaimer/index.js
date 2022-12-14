import React from "react";
import { SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, View, Text } from "react-native";
import { ThemeColors } from "../../utils";
import styles from "./style";
import Logo from '../../assets/images/logo.svg'
const { width, height } = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage'
const Disclaimer = ({navigation,route}) => {

    function handleNav() {
        AsyncStorage.setItem("token",route.params.token)
        navigation.replace("SelectStation")
    }


    


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground

                source={require('../../assets/images/BG.png')}
                style={{
                    width: width, alignSelf: "center", height: 200, justifyContent: "center",
                }}>

                <Logo width={87} height={81} style={{ alignSelf: 'center' }} />


            </ImageBackground>

            <View style={{ position: 'absolute', width: width, height: height - 220, bottom: 0, backgroundColor: ThemeColors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}></View>
            <Text style={{ color: ThemeColors.black, fontSize: 21, fontWeight: '700', textAlign: 'center', top: 20 }}>Disclaimer</Text>
            <Text style={{ color: ThemeColors.black, top: 30, padding: 30, textAlign: 'left', fontSize: 14, fontWeight: '400', color: ThemeColors.black, lineHeight: 24 }}>  The information provided by the Zdaly Fuel
                Network Optimizer app is based on historical data. Data on Zdaly Light is updated once daily at 8:00 a.m. eastern time. Any prospective information is based on that data and should not be relied on as a estimation of future performance. Any future product prices are the manufacturer's suggested retail price (MSRP) only. Sites are independent operators free to set their retail
                price.
            </Text>


            <TouchableOpacity onPress={()=>handleNav()} >

                <View style={styles.btn}>
                    <Text style={styles.logintext}>I Accept</Text>

                </View>
            </TouchableOpacity>


        </SafeAreaView>
    )
}
export default Disclaimer