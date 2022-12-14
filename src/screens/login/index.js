import React, { useState } from "react";
import { Dimensions, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View, ToastAndroid } from "react-native";
import styles from "./style";
import Logo from '../../assets/images/logo.svg'
import Mail from '../../assets/images/mail.svg'
import Frame from '../../assets/images/Frame.svg'
import Errow from '../../assets/images/Errow.svg'
import { LOCAL, ThemeColors } from "../../utils";
import Asyncstorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')


const Login = ({ navigation }) => {

    const [mail, SetMail] = useState('')
    const [password, Setpassword] = useState('')
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let regex = /^[a-zA-Z0-9._" "]*$/;
    let regex2 = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;



    function showMessage(message) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
        else {
            Alert.alert(message)
        }
    }


    function checkValidaition() {

        if (mail.length <= 0) {

            showMessage('Please enter mail')
        }
        else if (reg.test(mail) === false) {

            showMessage('Please enter valid mail')
        }
        else if (regex2.test(mail) === true) {

            showMessage('Emoji are not allow')
        }
        else if (password.length <= 0) {

            showMessage('Please enter your password')
        }
        else if (password.length < 6) {

            showMessage('Password length not be less than 6')
        }
        // else if(regex3.test(password)===false || test(password) ){
        //     ToastAndroid.show("Enter a strong Password",ToastAndroid.SHORT)
        // }
        // else if (/(?=.*?[A-Z])/.test(password) === false) {

        //     showMessage('Password should contain at list 1 uppercase char')
        // }
        // else if (/(?=.*?[a-z])/.test(password) === false) {

        //     showMessage('Password should contain at list 1 lowercase char"')
        // }
        // else if (/(?=.*?[0-9])/.test(password) === false) {

        //     showMessage('Password contain at list 1 digit')

        // }
        // else if (/(?=.*?[#?!@$%^&*-])/.test(password) === false) {

        //     showMessage('Password should contain at list 1 special char ')
        // }
        // else if(isSelected === false){
        //     showMessage('please Accept All terms & Conditions and Privacy policies')
        // }

        else {

            handleLogin()

        }
    }


    function handleLogin() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": mail,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://reqres.in/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                navigation.navigate("Disclaimer", {
                    "token": result.token
                })
            })
            .catch(error => console.log('error', error));



    }

    function showMessage(message) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
        else {
            Alert.alert(message)
        }
    }



    return (

        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Logo width={90} height={90} style={{ alignSelf: 'center' ,marginTop:40}} />
                <Text style={styles.loginText}>Login</Text>

                <View style={{
                    flexDirection: "row", width: width - 40,
                    height: 60,
                    alignSelf: 'center', justifyContent: "center", borderBottomWidth: 1.5,
                    borderBottomColor: ThemeColors.bottombordercolor, marginTop: 10,alignItems:'center',marginTop:30
                }}>


                    <Mail width={16} height={16} style={{ justifyContent: 'center', alignSelf: 'center', }} />

                    <TextInput
                        autoCapitalize='none'
                        value={mail}
                        placeholder="mail"
                        onChangeText={(text) => SetMail(text)}
                        style={styles.password_textinput} />

                </View>


                <View style={{
                     flexDirection: "row", width: width - 40,
                     height: 60,
                     alignSelf: 'center', justifyContent: "center", borderBottomWidth: 1.5,
                     borderBottomColor: ThemeColors.bottombordercolor, marginTop: 10,alignItems:'center'
                }}>


                    <Frame width={16} height={16} style={{ justifyContent: 'center', alignSelf: 'center', }} />

                    <TextInput
                        autoCapitalize='none'
                        value={password}
                        placeholder="Password"
                        onChangeText={(text) => Setpassword(text)}
                        secureTextEntry
                        // placeholderTextColor={ThemeColors.white}
                        style={styles.password_textinput} />

                </View>



                <ImageBackground

                    source={require('../../assets/images/BG.png')}
                    style={{ width: width, alignSelf: "center", height: height - 400, top: 80 }}>

                    <TouchableOpacity onPress={() => checkValidaition()}>

                        <View style={styles.btn}>
                            <Text style={styles.logintext}>Login</Text>
                            <Errow width={16} height={8} style={{ justifyContent: "center", alignSelf: 'center' }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignSelf: 'center', top: 30, color: ThemeColors.black, fontSize: 12, fontWeight: '700' }}>Forgot Password?</Text>


                </ImageBackground>

            </View>






        </SafeAreaView>
    )
}
export default Login