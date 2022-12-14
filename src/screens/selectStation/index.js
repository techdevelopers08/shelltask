import React, { useEffect, useState } from "react";
import { SafeAreaView, ImageBackground, Dimensions, Image, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { ThemeColors } from "../../utils";
import styles from "./style";
import Logo from '../../assets/images/logo.svg'
import Search from '../../assets/images/search.svg'
import Icon from "../../assets/images/Icon.svg"
const { width, height } = Dimensions.get('window')
const SelectStation = ({ navigation }) => {

  const [stationList, setStationList] = useState([])

  const [filteredData, setFilteredData] = useState([])


  const searchText = (e) => {
    let text = e.toString()
    let stations = stationList
    let filteredName = stations.filter((item) => {
      return item.name.match(text);
    })

    if (text == "") {

      setFilteredData(stationList)

    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      // set no data flag to true so as to render flatlist conditionally
      // setStationList(filteredName)

    } else if (Array.isArray(filteredName)) {
      setFilteredData(filteredName)
    }
  }

  function handleList(params) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://reqres.in/api/unknown", requestOptions)
      .then(response => response.json())
      .then((result) => {
        const json = result.data
        setStationList(json)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    handleList()
  }, [])


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")} style={{
      width: width - 20, height: 80, alignSelf: 'center'
      , marginTop: 20, flexDirection: 'row', bottombordercolor: ThemeColors.bottombordercolor, borderBottomWidth: 0.5
    }}>
      <Icon width={35} height={40} style={{ left: 30, alignSelf: 'center' }} />

      <View style={{ flexDirection: 'column', left: 60, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: ThemeColors.black, justifyContent: 'center' }}>{item.id}</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', color: ThemeColors.fadegray, justifyContent: 'center' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  console.log("DATA", stationList)

  return (

    <SafeAreaView style={styles.container}>

      <ImageBackground

        source={require('../../assets/images/BG.png')}
        style={{
          width: width, alignSelf: "center", height: 150, justifyContent: "center",
        }}>

        <Text style={{ alignSelf: "center", fontSize: 21, fontWeight: '700', color: ThemeColors.black }}>Select Station</Text>


      </ImageBackground>

      <View style={{ backgroundColor: ThemeColors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30, flexDirection: 'column' }}>
        <View style={{
          flexDirection: 'row', marginTop: 20, alignSelf: "center", width: width - 30,
          backgroundColor: ThemeColors.serachBarBack, borderRadius: 11
        }}>
          <Search width={18} height={19} style={{ justifyContent: "center", alignSelf: "center", marginStart: 20 }} />
          <TextInput
            autoCapitalize='none'
            // value={password}
            onChangeText={(val) => searchText(val)}
            placeholder="Search by Name"
            autoFocus={true}
            // onChangeText={(text) => Setpassword(text)}
            // secureTextEntry
            // placeholderTextColor={ThemeColors.white}
            style={{
              alignSelf: 'center',
              padding: 20
            }}
          />
        </View>
        <FlatList
          style={{height:height-290}}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate={"fast"}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
export default SelectStation