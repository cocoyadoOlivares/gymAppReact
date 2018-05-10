//IMport Libraries for Component

import React from 'react';
import {Text, View} from 'react-native'


//Make component Same Name as File COmponents go with Caps
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style = {viewStyle}>
    <Text style = {textStyle}> {props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle : {
    backgroundColor : '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative'




  },
  textStyle: {
    fontSize: 20
  }
};

//make Component available for other parts of app
export default Header;
