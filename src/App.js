import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { plug } from './plugConfig'
import {TextEncoder} from 'text-encoding'

const App = () => {
    const [loading,setLoading]=useState(false)
    const [principal,setPrincipal]=useState("")

    const plugTest=async()=>{
        console.log("plug object : ",plug)
        await plug?.getPrincipal().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Plug testing</Text>
      <Text style={styles.normalText}>Principal : {principal}</Text>
      <TouchableOpacity style={styles.btn} onPress={plugTest}>
        <Text style={styles.btnText}>Connect</Text>
      </TouchableOpacity>
      <ActivityIndicator animating={loading} size={40} style={styles.loader}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    view:{
        width:Dimensions.get("window").width,
        height:Dimensions.get('window').height,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'600',
        fontSize:40,
        color:'black'
    },
    btn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        width:'40%',
        padding:20,
        borderRadius:16,
        marginTop:30
    },
    btnText:{
        fontWeight:'600',
        fontSize:24,
        color:'white'
    },
    loader:{
        position:'absolute',
        top:'50%',
        left:'45%'
    },
    normalText:{
        fontWeight:'600',
        fontSize:20,
        color:'black',
        maxWidth:'90%'
    }
})