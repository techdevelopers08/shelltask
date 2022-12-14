import React, { useEffect } from "react";

import {View,Text, Image} from 'react-native'
import Logo from '../assets/images/logo.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({navigation})=>{


    async function handleDefaultNAv() {
        let token = await AsyncStorage.getItem("token")
        setTimeout(()=>{
            if(token!=null){
                navigation.replace("SelectStation")
            }else{
                navigation.replace("Login")
            }
                
        },2000)
    }

  

    useEffect(  ()=>{

        handleDefaultNAv()
       
    })

    return(
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignSelf:'center'}}>
            <Logo width={100} height = {100} style={{justifyContent:'center',alignSelf:'center'}}/>
        </View>
    )   

}

export default Splash