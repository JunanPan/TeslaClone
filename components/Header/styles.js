import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        position:'absolute',
        top:50,
        // backgroundColor:'yellow',
        zIndex:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    logo:{
        width:100,
        height:20,
        resizeMode:'contain'
    },
    menu:{
        width:25,
        height:25,
        // alignContent:'center',
        // justifyContent:'center'
    }
})

export default styles;