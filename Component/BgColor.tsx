import { Clipboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BgColor = () => {
    const [bgColor,setbgcolor] = useState('#000000')

    function generateBgColor(){
        const bgString = '0123456789abcdef'
        let bgColorLc = '#'
        for (let index = 0; index < 6; index++) {
            bgColorLc += bgString.charAt(Math.floor(Math.random() * bgString.length))
        }
        setbgcolor(bgColorLc)
    }

    function copyColorCode (){
        Clipboard.setString(bgColor);
    }

  return (
    <>
    <View style={[styles.mainCont,{backgroundColor:bgColor}]}>
        <View>
        <Text style={styles.bgColorCode}>{bgColor}</Text>
        <TouchableOpacity onPress={copyColorCode}><Text>Copy</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnStyle} onPress={generateBgColor}>
            <Text style={styles.btnTxt}>Next Color</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default BgColor

const styles = StyleSheet.create({
    mainCont :{
        flex:1,
        justifyContent:'space-evenly' ,
        alignItems:'center',

        
    },
    btnStyle :{
        backgroundColor:'green',
        padding:8,
        borderRadius:10
    },
    btnTxt:{
        fontSize:28
    },
    bgColorCode :{
        fontSize:28,
        fontWeight:'bold'
    }
})