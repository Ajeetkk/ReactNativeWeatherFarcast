import React from 'react';
import {observer, inject} from 'mobx-react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';
import ImageComponent from './ImageComponent';

@inject('store')
@observer
class Home extends React.Component {
  componentDidMount() {
    this.apiCallWeatherForcast(this.props.store.defaultData);
  }
  searchData() {
    this.apiCallWeatherForcast(this.props.store.queryData);
  }

  apiCallWeatherForcast(querySeacrhData) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${querySeacrhData}&appid=cabd7b07e0a83ca8fffb66ca5bbece57`,
      )
      .then((res) => {
        this.props.store.weatherData = res.data.city.name;
        this.props.store.country = res.data.city.country;
        this.props.store.description = res.data.list[0].weather[0].description;
        this.props.store.listItem = res.data.list;
      });
  }

  render() {
    let dateFormate = (argData) => {
      let showToday = '';
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let systemDate = new Date();
      let getSystemDayNumber = systemDate.getDate();

      let data = new Date(argData.replace(' ', 'T'));
      let dayNumber = data.getDate();
      let dayName = days[data.getDay()];
      let monthName = monthNames[data.getMonth()];
      let year = data.getFullYear();

      if (getSystemDayNumber == dayNumber) {
        showToday = 'Today';
      }
      return (
        dayName +
        ' ' +
        dayNumber +
        ' ' +
        monthName +
        ' ' +
        year +
        ' ' +
        showToday
      );
    };
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>5 day weather forecast</Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            placeholder="City or Country name"
            style={styles.searchField}
            onChangeText={this.props.store.onChangeText}
          />
          <Button onPress={() => this.searchData()} title="Search" />
        </View>

        <View style={{flex: 1}}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.cityCountry}>
              {' '}
              City : {this.props.store.weatherData}
            </Text>
            <Text style={styles.cityCountry}>
              {' '}
              Country : {this.props.store.country}
            </Text>
          </View>

          <FlatList
            data={this.props.store.listItem}
            renderItem={({item}) => (
              <Text style={styles.listSection}>
                <Text style={{marginLeft: 20}}>
                  <ImageComponent desc={item.weather[0].description} />
                </Text>{' '}&nbsp;
                {item.weather[0].description} {'' + ' '}
                {dateFormate(item.dt_txt)} {'\n'}
                <Text
                  style={{
                    backgroundColor: '#f0ad4e',
                    padding: '2px',
                    color: 'green',
                  }}>
                  {' '}
                  {Math.round(((item.main.temp - 32) * 5) / 9)}&#8451;{' '}
                  &nbsp;&nbsp;
                </Text>{' '}
                {'\n'}
                {item.wind.speed}m/s Humidity: {item.main.humidity}% ,{' '}
                {item.main.pressure}hpa
              </Text>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  formSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  searchField: {
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 18,
  },
  cityCountry: {
    textAlign: 'center',
    fontSize: 18,
  },
  listSection: {
    textAlign: 'center',
    fontSize: 17,
    borderColor: 'gray',
    borderWidth: 1,
    paddingBottom: 10,
  },
});

export default Home;
