
import {ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  return (
    
    <View >
      <View style={styles.rec}>
      <Text style={styles.bodha}>BodhaIAS</Text>
      </View>
      <Text style={styles.log} >LOGIN</Text>
      <Text style={styles.enter}>Enter your details:</Text>
      <TextInput  style={styles.user} defaultValue='Username' />    
      <TextInput style={styles.user} defaultValue='Password'/>  
      <Text style={styles.for}>Forgot Password?</Text> 
      <Text style={styles.logbot} >LOGIN</Text>
     
      <Text style={styles.Or}>Or login with</Text>
      <Text style={styles.don}>Don't have an Account?</Text>
      <Text style={styles.reg}>Register here?</Text>
      <View style={styles.last}>

        </View>
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rec:{
    
    width:"100%",
    height:"12%",
    backgroundColor: "#A578F2",
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
  },
  bodha:{
    marginTop:30,
    fontSize:45,
    color:"white",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
  },
  log:{
    color:"#A578F2",
    marginTop:35,
    fontSize:30,
    textAlign:"center",
    fontWeight:"500",
    
  },
  enter:{
   marginLeft:29,
    fontSize:19,
    margin:20
  
  },
  user:{
    fontSize:20,
    paddingLeft:35,
    backgroundColor:"#A578F2",
    width:"70%",
    marginLeft:"20%",
    borderRadius:50,
    margin:10,
    color:"#000000"

  },
  for:{
    fontSize:18,
    marginLeft:"20%",
 
    color:"#2B9EAE"
  },
  logbot:{
    backgroundColor:"#9D64FF",
    width:100,
    textAlign:"center",
    marginLeft:"35%",
    margin:20,
    padding:10,
    fontSize:20,
    borderRadius:50,
    color:"white"
  },
  Or:{
    textAlign:"center",
    },
    don:{
      
      marginLeft:110,
      marginTop:90
    },
    reg:{
      margin:0,
    marginLeft:130,
      color:"#2B9EAE"
    },
    last:{
      backgroundColor:"#A578F2",
      height:"10%",
      width:"100%",
      borderTopRightRadius:500,
    borderTopLeftRadius:500,
    margin:50,
    marginLeft:0
    
    }
});