import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#b2dfdb',
  },
  header: {
    backgroundColor: '#b2dfdb',
    height: 80,
    padding: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '800',
    color: '#00695c',
  },
});

const itemCard = StyleSheet.create({
  container: {
    padding: 15,
  },

  img: {
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 10,
  },
  big_heart: {
    position: 'absolute',
    tintColor: '#e0e0e0',
    top: '34%',
    left: '34%',
    height: 100,
    width: 100,
    // transform: [{translateX: -50}, {translateY: -50}],
  },

  big_heart_anime: {
    position: 'absolute',
    tintColor: 'red',
    top: '25%',
    left: '25%',
    height: 180,
    width: 180,
    // transform: [{translateX: -80}, {translateY: -80}],
  },

  top_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  small_heart: {
    fontSize: 19,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
  },
});

export {main, itemCard};
