import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const InPost = ({route}) => {
  const {item} = route.params

  return (
    <SafeAreaView>
      <Text>{item.content}</Text>
    </SafeAreaView>
  )
}

export default InPost

const styles = StyleSheet.create({})