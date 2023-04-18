import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Series = () => {
  const count = useSelector(state => state.counter.value)

  return (
    <SafeAreaView>
      <Text>Series {count}</Text>
    </SafeAreaView>
  )
}

export default Series

const styles = StyleSheet.create({})