'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
//import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// export default class Scan extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//             ref={ref => {
//               this.camera = ref;
//             }}
//             style = {styles.preview}
//             type={RNCamera.Constants.Type.back}
//             flashMode={RNCamera.Constants.FlashMode.on}
//             permissionDialogTitle={'Permission to use camera'}
//             permissionDialogMessage={'We need your permission to use your camera phone'}
//             onGoogleVisionBarcodesDetected={({ barcodes }) => {
//               console.log(barcodes)
//             }}
//         />
//         <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
//         <TouchableOpacity           
//             style = {styles.capture}
//         >
//             {/* <Text style={{fontSize: 14}}> SNAP </Text> */}
//             <Icon size={50} name='camera' onPress={this.takePicture.bind(this)} />
//         </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async function() {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options)
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black'
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     //borderRadius: 5,
//     //padding: 0,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20
//   }
// });

export default class Scan extends React.Component{
  render(){
    return(
      <View>
        <Text>1</Text>
      </View>
    )
  }
}