import React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';



export default class App extends React.Component {

    state = {
        image:[null,null,null,null, null, null],
    };

    _pickImage = async (val) => {
        const images = this.state.image;

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        console.log(result);

        if (!result.cancelled) {
            images[val] = result.uri;

            this.setState({images});
        }
    };

    renderInstance(val) {
        return (
            <View>
              <Button
                  title="Pick an image from camera roll"
                  onPress={()=>this._pickImage(val)}
              />
                {this.state.image[val] && <Image source={{uri: this.state.image[val]}} style={{width: 100, height: 100}}/>}
            </View>
        );
    }


    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.flexStyle}>
                {this.renderInstance(0)}
                {this.renderInstance(1)}
              </View>
              <View style={styles.flexStyle}>
                {this.renderInstance(2)}
                {this.renderInstance(3)}
              </View>
              <View style={styles.flexStyle}>
                {this.renderInstance(4)}
                {this.renderInstance(5)}
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      width: '50%',
      height: '35%',
    }
});
