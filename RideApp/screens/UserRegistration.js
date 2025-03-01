import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { verifyUser } from '../services/api';

export default function UserRegistration({ navigation }) {
  const [name, setName] = useState('');
  const [idImage, setIdImage] = useState(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        setIdImage(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    if (name && idImage) {
      const verificationResult = await verifyUser(name, idImage);
      if (verificationResult.success) {
        navigation.navigate('Verification');
      } else {
        alert('Verification failed. Please try again.');
      }
    } else {
      alert('Please fill all fields and upload an image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Button title="Upload National ID" onPress={handleImagePick} />
      {idImage && <Image source={{ uri: idImage }} style={styles.image} />}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});