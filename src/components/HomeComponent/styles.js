import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: '50%',
  },
  input: {
    height: 28,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'grey',
    marginVertical: 22,
    width: '70%',
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
    fontWeight: 'bold',
  },
  ageText: {
    margin: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
});
