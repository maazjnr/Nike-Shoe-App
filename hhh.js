import { View, Text, Image } from 'react-native'
import React from 'react'

const Hhhh = () => {
  return (
    <View>
            <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
        }}
        style={{    width: "100%",
        aspectRatio: 1,}}
        resizeMode="cover"
      />
    </View>
  )
}

export default Hhhh