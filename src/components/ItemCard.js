import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  UIManager,
  LayoutAnimation,
} from 'react-native';

import DoubleClick from 'react-native-double-click';

import {itemCard} from '../style/myStyle';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ItemCard = ({componentItem}) => {
  const [liked, setLiked] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState('initial');
  const [heartOpacity, setHeartOpacity] = useState(0);

  const HandleClick = () => {
    setLiked(!liked);
    !liked ? setHeartOpacity(1) : null;
    toggleHeartAnimation();
  };

  const toggleHeartAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setHeartAnimation(heartAnimation === 'initial' ? 'final' : 'initial');
  };

  useEffect(() => {
    const delay = setTimeout(() => setHeartOpacity(0), 600);
    return () => delay;
  }, [heartOpacity]);

  return (
    <View style={itemCard.container}>
      <DoubleClick onClick={HandleClick}>
        <Image source={{uri: componentItem.img}} style={itemCard.img} />
        <Image
          style={[
            heartAnimation === 'initial'
              ? itemCard.big_heart
              : itemCard.big_heart_anime,
            {opacity: heartOpacity},
          ]}
          source={require('../assets/heart3x.png')}
        />
      </DoubleClick>
      <View style={itemCard.top_row}>
        <Text style={itemCard.title}>{componentItem.userName}</Text>
        <Text style={itemCard.small_heart}>{liked ? '♥️' : '🖤'}</Text>
      </View>
      <Text style={itemCard.description}>{componentItem.description}</Text>
    </View>
  );
};

export default ItemCard;

// "id": 0,
// "userName": "Nikola_Tesla",
// "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
// "description": "Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.",
// "isLiked": false
