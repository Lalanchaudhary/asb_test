import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from './Assets/argon.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from 'react-native-vector-icons/Octicons'
import square from './Assets/squareIcon.png'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/EvilIcons'
import Icon5 from 'react-native-vector-icons/Ionicons'
const App = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Drawer_box}>
        <View style={styles.logo_container}>
          <Image source={logo} style={styles.logo} />
          <Icon name='bars' style={styles.draw_icon} />
        </View>
        <View style={[styles.drawer_components,{backgroundColor:'#5E73E6'}]}>
          <Home name='home' style={{fontSize:26,color:'white'}} />
          <Text style={[styles.components_text,{fontWeight:600}]}>Home</Text>
        </View>
        <View style={[styles.drawer_components]}>
          <Image source={square} style={{height:17,width:17}} />
          <Text style={[styles.components_text,{color:'black'}]}>Example</Text>
        </View>

        <View style={[styles.drawer_components]}>
          <Icon2 name='swap' style={{fontSize:20,color:'blue'}} />
          <Text style={[styles.components_text,{color:'black'}]}>Components</Text>
        </View>

        <View style={[styles.drawer_components]}>
          <Icon3 name='article' style={{fontSize:20,color:'#5E73E6'}} />
          <Text style={[styles.components_text,{color:'black'}]}>Articles</Text>
        </View>
        <View style={[styles.drawer_components]}>
          <Icon4 name='user' style={{fontSize:22,color:'#08cff0'}} />
          <Text style={[styles.components_text,{color:'black'}]}>Profile</Text>
        </View>
        <View style={[styles.drawer_components]}>
          <Icon2 name='calendar' style={{fontSize:20,color:'red'}} />
          <Text style={[styles.components_text,{color:'black'}]}>Account</Text>
        </View>
        <View style={styles.mid_box}>
          <Text>DOCUMENTATION</Text>
        </View>

        <View style={[styles.drawer_components]}>
          <Icon2 name='rocket1' style={{fontSize:20,color:'grey'}} />
          <Text style={[styles.components_text,{color:'grey'}]}>Getting started</Text>
        </View>
        
        <View style={[styles.drawer_components]}>
          <Icon5 name='color-palette-sharp' style={{fontSize:20,color:'grey'}} />
          <Text style={[styles.components_text,{color:'grey'}]}>Logout</Text>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'grey'
  },
  Drawer_box:{
    flex:1,
    width:'80%',
    backgroundColor:'#fff',
    padding:20
  },
  logo_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:40
  },
  logo:{
    height:45,
    width:150
  },
  draw_icon:{
    fontSize:30,
    color:'black'
  },
  drawer_components:{
    height:45,
    marginVertical:5,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    borderRadius:5,
    gap:20
  },
  components_text:{
    color:'white',
    fontSize:16
  },
  mid_box:{
    padding:20,
    borderTopWidth:0.5,
    marginTop:15
  }
  })