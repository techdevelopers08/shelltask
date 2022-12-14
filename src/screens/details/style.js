import React from "react";
import { Dimensions, StyleSheet, } from "react-native";
import { ThemeColors } from "../../utils";
const {width}=Dimensions.get('window')
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
           
        },
       loginText:{
        color:ThemeColors.black,
            fontSize:21,
            fontWeight:'700',
            textAlign:'center',
            top:54

       },
         password_textinput:{
            width:width-80,
            alignSelf:'center',

            left:20



         },
         gamil_textinput:{
            width:width-57,
            alignSelf:'center',
            borderBottomWidth:1,
            borderBottomColor:ThemeColors.bottombordercolor


         },
         btn:{
            backgroundColor:ThemeColors.red,
            width:130,
            height:60,
            marginTop:40,
            borderRadius:30,
            justifyContent:'center',
            alignSelf:'center',
            color:ThemeColors.white,
            flexDirection:'row',
            
         },
         logintext:{
            color:ThemeColors.white,
            fontSize:16,
            fontWeight:'600',
            textAlign:'center',
            alignSelf:"center",
            marginRight:10
         },
         btn:{
            backgroundColor:ThemeColors.red,
            width:239,
            height:60,
            marginTop:40,
            borderRadius:30,
            justifyContent:'center',
            alignSelf:'center',
            color:ThemeColors.white,
            flexDirection:'row',
            
         },
         logintext:{
            color:ThemeColors.white,
            fontSize:16,
            fontWeight:'600',
            textAlign:'center',
            alignSelf:"center",
            marginRight:10
         }

    }
)
export default styles