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
        resolve(fallbackBicyclesLocations);
      });
  });

export const fetchUserLocation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(fallBackUserLocation));
  });
