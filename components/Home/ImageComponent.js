import React from 'react';
import {Text, View, Image} from 'react-native';
class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.desc == 'light rain' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/10d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'few clouds' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/02d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'scattered clouds' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/03d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'broken clouds' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/04d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'shower rain' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/05d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'overcast clouds' ? (
            <Image
              source={require('./images/overcast-clouds.png')}
              style={{width: 40, height: 40}}
            />
          ) : this.props.desc == 'thunderstorm' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/11d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'moderate rain' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/09d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : this.props.desc == 'moderate rain' ? (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/09d.png'}}
              style={{width: 60, height: 60}}
            />
          ) : (
            <Image
              source={{uri: 'https://openweathermap.org/img/w/01d.png'}}
              style={{width: 60, height: 60}}
            />
          )}
        </Text>
      </View>
    );
  }
}
export default ImageComponent;
