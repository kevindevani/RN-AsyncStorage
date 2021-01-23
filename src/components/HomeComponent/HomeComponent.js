import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Animated} from 'react-native';

import {styles} from './styles';
import {clearStorage, readData, storeData} from '../../utils/storage';
import {AGE_KEY, HEIGHT_KEY} from '../../utils/constant';

const HomeComponent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [age, setAge] = useState('');

  const [storeAge, setStoreAge] = useState('');

  const [height, setHeight] = useState('');

  const [storageH, setStorageH] = useState('');

  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const getLocalData = async () => {
    const a = await readData(AGE_KEY);
    const b = await readData(HEIGHT_KEY);
    setStoreAge(a);
    setStorageH(b);
  };

  const handleStoreAge = () => {
    setStoreAge(age);
    setStorageH(height);
    storeData(AGE_KEY, age);
    storeData(HEIGHT_KEY, height);
  };

  const handleClear = () => {
    setAge('');
    setHeight('');
    setStorageH('');
    setStoreAge('');
    clearStorage();
  };

  const onChangeText = (userAge) => setAge(userAge);

  const handleHeight = (val) => setHeight(val);

  const onSubmitEditing = () => {
    if (!age) {
      return;
    }

    storeData(age);
    setAge('');
  };

  return (
    <Animated.View style={[styles.Container, {opacity: fadeAnim}]}>
      <View style={styles.TextView}>
        <TextInput
          style={styles.input}
          placeholder="Age is just Number!"
          keyboardType={'numeric'}
          value={age}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Height matters!"
          keyboardType={'numeric'}
          value={height}
          onChangeText={handleHeight}
        />
        <TouchableOpacity onPress={handleStoreAge}>
          <Animated.View style={[styles.buttonView]}>
            <Text style={styles.buttonText}>Store</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Text style={styles.ageText}>Your Age is : {storeAge} </Text>
      <Text style={styles.ageText}>Your Height is : {storageH} </Text>
      <TouchableOpacity onPress={handleClear}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Clear Age</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default HomeComponent;
