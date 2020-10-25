import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import sourceData from './assets/sourceData.json';

import {main} from './style/myStyle';
import ItemCard from './components/ItemCard';

const Main = () => {
  const renderedFunction = ({item}) => <ItemCard componentItem={item} />;

  return (
    <SafeAreaView style={main.safe_area}>
      {/* -----HEADER-----   */}
      <View style={main.header}>
        <Text style={main.title}>GURUS OF SCIENCE</Text>
      </View>

      {/* -----FLATLIST----- */}
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={sourceData}
        renderItem={renderedFunction}
      />
    </SafeAreaView>
  );
};

export default Main;
