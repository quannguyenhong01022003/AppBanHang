import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {colors, fontsize} from '../constains'

const UIButton = (props) => {

    const {onPress, title, isSelecteed} = props
  return (
    <TouchableOpacity
    // truyền hàm sang nơi gọi nó
    onPress={onPress} 
            style={{
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 5,
              marginHorizontal: 15,
              marginVertical: 10,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isSelecteed == true ? 'white' : null
            }}>
            {isSelecteed == true && <AntDesign size={20} name={'checkcircle'} style={{color: 'green', position:'absolute', left: 10, top: 10}} />}
            <Text style={{color: isSelecteed == true ? colors.primary : 'white', fontSize: fontsize.h2}}>{title}</Text>
          </TouchableOpacity>
    
  )
}

export default UIButton