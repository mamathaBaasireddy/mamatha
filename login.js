import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Otp from './Otp';

export default function App() {
  return (
    <View >
      <View style={styles.rec}>
      <Image source={require('./components/appicon.jpg')} style={styles.img }/> 
      <Text style={styles.bodha}>BodhaIAS</Text>
      </View>
      <Text style={styles.log}>LOGIN</Text>
      
      <Text style={styles.enter} >Enter your Phone Number:</Text>
      <View style={styles.u}>
      <TextInput  style={styles.user} keyboardType='numeric' maxLength={10} placeholder='Phone number' />
        
      </View>
      <View style={styles.det} >
      <Button  style={styles.btn} title='Send Otp' onPress={() =>{<Otp/>}}/>
      </View>
      <Text style={styles.don}>Don't have an Account?</Text>
      <TouchableOpacity>
      <Text style={styles.reg}>Register here?</Text>
      </TouchableOpacity>
      <View style={styles.last}>

      </View >  

      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    color:"#A578F2",
    flex: 1,
    height:"12%",
    backgroundColor: "#A578F2",
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
  },
  rec:{
    flexDirection:'row',
    width:"100%",
    height:"15%",
    backgroundColor:"#A578F2",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  },
  bodha:{
    marginTop:45,
    marginLeft:30,
    fontSize:45,
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
    
  },
  img:{ 
    height:50,
    width:50,
    marginTop:48,
    marginLeft:35,
   borderRadius:50,
   resizeMode:'stretch'
  },
  
  log:{
    color:"#A578F2",
    marginTop:30,
    fontSize:35,
    textAlign:"center",
    fontWeight:"500",
    marginBottom:20
  },
  enter:{
    marginLeft:58,
    fontSize:19,
    marginTop:20,
   
  
  },
  user:{
    fontSize:18,
    paddingLeft:35,
    backgroundColor:"#A578F2",
    width:"70%",
    height:40,
   
    borderRadius:50,
    margin:5,
   
    color:"#000000"

  },
  for:{
    fontSize:18,
    marginLeft:"20%",
    marginTop:10,
    color:"#2B9EAE"
  },
  logbot:{
    backgroundColor:"#9D64FF",
    width:"50%",
    textAlign:"center",
    marginLeft:"35%",
    marginTop:45,
    padding:20,
    fontSize:20,
    borderRadius:50,
    color:"white",
    
  },
  Or:{
    textAlign:"center",
    marginTop:20
    },
    don:{
      
      marginLeft:120,
      marginTop:30
    },
    reg:{
      margin:0,
    marginLeft:150,
      color:"#2B9EAE"
    },
   
   icons:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-evenly'
   },
  
  u:{
    alignItems:"center",
    justifyContent:"center",
   
    marginTop:20  
  },
  det:{
    margin:50,
    alignItems:"center",
    justifyContent:"center",
  },
  last:{
    backgroundColor:"#A578F2",
    height:"10%",
    width:"100%",
    borderTopRightRadius:700,
  borderTopLeftRadius:700,
 marginTop:200,
  marginLeft:0,
  marginRight:0,
},
});
``