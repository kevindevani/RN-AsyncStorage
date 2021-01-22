import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved');
  } catch (e) {
    console.log(e);
  }
};

export const readData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};
