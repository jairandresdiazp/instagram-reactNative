import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface AddProps {
  route: any;
  navigation: any;
}

const Add: FunctionComponent<AddProps> = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState<
    boolean | null
  >(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [image, setImage] = useState({ uri: '' });

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');

      const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryPermission.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage({ uri: data.uri });
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage({ uri: result.uri });
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera or gallery</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image.uri == '' ? (
        <Camera
          ref={(ref) => {
            setCamera(ref);
          }}
          style={styles.preview}
          type={type}
        >
          <View style={styles.buttonContainerTransparent}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons
                name="camera-reverse-outline"
                size={24}
                color="#ffffff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                takePicture();
              }}
            >
              <MaterialIcons
                name="panorama-fish-eye"
                size={80}
                color="#ffffff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pickImage();
              }}
            >
              <Ionicons name="images-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <Image source={image} style={styles.capture} />
      )}
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: '#ffffff',
  },
  preview: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    aspectRatio: 1,
  },
  capture: {
    flex: 1,?
    marginTop: 50,
    marginBottom: 50,
    aspectRatio: 1,
  },
  buttonContainerTransparent: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
