import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images, icons, fontsize, colors} from '../constains';
import {UIButton} from '../components';

const Welcome = () => {
  const [accoutTypes, setaccoutTypes] = useState([
    {name: 'Influencer', isSelecteed: true},
    {name: 'Business', isSelecteed: false},
    {name: 'Individual', isSelecteed: false},
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={images.background} style={styles.imageGround}>
        {/* header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={icons.fire} style={styles.iconHeader} />
              <Text style={styles.textHeader}>YOURCOMPANY.COM</Text>
            </View>

            <Image
              source={icons.question}
              style={[styles.iconHeader, {tintColor: 'white'}]}
            />
          </View>
        </View>

        {/* Navigation*/}
        <View style={styles.Navigation}>
          <Text
            style={[
              styles.textNavigation,
              {marginBottom: 8, fontSize: fontsize.h1},
            ]}>
            Welcome to
          </Text>
          <Text
            style={[
              styles.textNavigation,
              {marginBottom: 8, fontWeight: 'bold', fontSize: fontsize.h2},
            ]}>
            YOURCOMPANY.CO!
          </Text>
          <Text style={[styles.textNavigation, {fontSize: fontsize.h1}]}>
            Please select your accout type
          </Text>
        </View>

        <View style={styles.main}>
          {accoutTypes.map(accoutType => (
            <UIButton
              onPress={() => {
                let newAcoutType = accoutTypes.map(eachAcoutType => {
                  return {
                    ...eachAcoutType,
                    isSelecteed: eachAcoutType.name == accoutType.name,
                  };
                  // if(eachAcoutType.name == accoutType.name){
                  //   return {...eachAcoutType, isSelecteed: true}
                  // }
                  // else{
                  //   return {...eachAcoutType, isSelecteed:false}
                  // }
                });
                setaccoutTypes(newAcoutType);
              }}
              title={accoutType.name}
              isSelecteed={accoutType.isSelecteed}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <UIButton title={'Login'.toUpperCase()} />
          <Text
            style={[
              styles.textHeader,
              {alignSelf: 'center', fontSize: fontsize.h1},
            ]}>
            You want to register new Accout?
          </Text>
          <TouchableOpacity onPress={() => {alert('regiter')}}>
            <Text style={styles.register}>Resgister</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  imageGround: {
    flex: 100,
  },

  // header container
  headerContainer: {
    flex: 20,
  },

  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconHeader: {
    width: 30,
    height: 30,
  },
  textHeader: {
    color: 'white',
    fontSize: fontsize.h1,
    marginLeft: 5,
  },

  // textNavigation
  Navigation: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNavigation: {
    color: 'white',
  },

  // main
  main: {
    flex: 40,
  },

  // footer
  footer: {
    flex: 20,
   
  },
  register: {
    alignSelf: 'center',
    marginTop: 5,
    textDecorationLine: 'underline',
    color: colors.primary
  },
});
