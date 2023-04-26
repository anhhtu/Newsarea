import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import Header from '../components/inPost/Header'
import MainView from '../components/inPost/MainView'
import BottomView from '../components/inPost/BottomView'

const InPost = ({route}) => {
  const {item} = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header item={item}/>
      <MainView item={item}/>
      <BottomView item = {item}/>
    </SafeAreaView>
  )
}

export default InPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})