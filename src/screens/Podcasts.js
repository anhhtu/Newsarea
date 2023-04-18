import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Counter } from '../redux/Counter'

const Podcasts = () => {
  return (
    <SafeAreaView>
      <Text>Podcasts</Text>
      <Counter/>
    </SafeAreaView>
  )
}

export default Podcasts

const styles = StyleSheet.create({})