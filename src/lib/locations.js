import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const fallbackBicyclesLocations = [
  {
    locationId: 'a9d5a74e-651c-447f-92c3-07c46d15f9ea',
    description: '',
    title: 'Facultatea de Informatica, Iasi',
    coordinate: {
      longitude: 27.574917,
      latitude: 47.173929,
    },
    radius: 10,
  },
];

const fallBackUserLocation = {
  longitude: 27.574917,
  latitude: 47.173929,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};

const locationsApiURL = 'https://bike-sharing-app.herokuapp.com/locations';

export const fetchBicycleLocations = () =>
  new Promise((resolve, reject) => {
    fetch(locationsApiURL)
      .then((result) => result.json())
      .then((data) => {
        resolve(
          data.map((marker) => ({
            coordinate: {
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            },
            title: marker.name,
            description: '',
            locationId: marker.locationId,
            radius: marker.radius,
          })),
        );
      })
      .catch((err) => {
        console.log('falling back to bicycles locations', err);
        resolve(fallbackBicyclesLocations);
      });
  });

const requestGeolocationpermission = () =>
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    title: 'Location access required',
    message: 'BicycleSharing needs access to your location to provide the best experience',
  });

const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        resolve({
          ...position.coords,
          ...{
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
        });
      },
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  });

export const fetchUserLocation = async () => {
  try {
    const status = await requestGeolocationpermission();
    if (status !== PermissionsAndroid.RESULTS.GRANTED) {
      return fallBackUserLocation;
    }
    return await getCurrentPosition();
  } catch (err) {
    console.log('error while getting user location', err);
    return fallBackUserLocation;
  }
};
