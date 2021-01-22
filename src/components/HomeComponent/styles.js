import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/fonts';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: '50%',
  },
  input: {
    //height: 28,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: Fonts.size.l,
    borderColor: 'grey',
    marginVertical: 22,
    width: '70%',
    fontFamily: Fonts.family.nunitoRegular,
  },
  buttonView: {
    marginTop: 12,
    display: 'flex',
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },
  buttonText: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: Fonts.family.nunitoRegular,
  },
  ageText: {
    margin: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
    fontFamily: Fonts.family.nunitoRegular,
  },
});
