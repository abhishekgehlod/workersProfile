import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Carousel from '../components/Carousel';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import MicIcon from 'react-native-vector-icons/FontAwesome5';
import ThreeDotIcon from 'react-native-vector-icons/Entypo';

const workers = [
  {
    id: '1',
    name: 'John Doe',
    country: 'US',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'photographer',
  },
  {
    id: '2',
    name: 'Jane Smith',
    country: 'GB',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'astrologer',
  },
  {
    id: '3',
    name: 'Liu Wei',
    country: 'CN',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'plumber',
  },
  {
    id: '4',
    name: 'Arlene',
    country: 'DE',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'assistant',
  },
  {
    id: '5',
    name: 'Leslie',
    country: 'JP',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'Makeup',
  },
  {
    id: '6',
    name: 'Arthur',
    country: 'IN',
    image:
      'https://www.shutterstock.com/image-vector/young-man-cartoon-260nw-1051668083.jpg',
    categories: 'Mehndi',
  },

  // Add more profiles here
];

const countryFlags = {
  US: '🇺🇸',
  GB: '🇬🇧',
  CN: '🇨🇳',
  IN: '🇮🇳',
  JP: '🇯🇵',
  DE: '🇩🇪',
  // Add more countries and their flags
};

const CatogeryScreen = () => {
  const [data, setData] = useState(workers);

  const onSearch = txt => {
    let filterData = workers.filter(item => {
      return item.categories.toLowerCase().indexOf(txt.toLowerCase()) > -1;
    });
    setData(filterData);
    // console.log(filterData);
  };

  const WorkerProfile = ({name, country, image, categories}) => (
    <View style={styles.profileContainer}>
      <Image source={{uri: image}} style={styles.profileImage} />
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileName}>{categories}</Text>
      <Text style={styles.countryFlag}>{countryFlags[country]}</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{width: '100%', height: 150}}>
        <Carousel />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          marginTop: 20,
          margin: 10,
        }}>
        <View style={styles.input}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <SearchIcon name={'search1'} size={25} color={'#000'} />
            <TextInput
              style={{color: '#000', width: '80%'}}
              placeholder="Search"
              placeholderTextColor={'#000'}
              onChangeText={text => onSearch(text)}
            />
          </View>

          <MicIcon
            style={styles.icon2}
            name={'microphone-alt'}
            size={25}
            color={'#000'}
          />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            marginLeft: 10,
            marginTop: 5,
          }}>
          <ThreeDotIcon name={'sound-mix'} size={25} color={'#000'} />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <WorkerProfile
            name={item.name}
            country={item.country}
            image={item.image}
            categories={item.categories}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2} // Display two columns
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default CatogeryScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f2f2f2',
    width: '80%',
    alignSelf: 'center',

    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  icon2: {
    marginRight: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  profileContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  countryFlag: {
    fontSize: 24,
    marginTop: 5,
  },
});
