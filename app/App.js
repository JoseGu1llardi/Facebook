import React from 'react';

import {StatusBar, ScrollView} from 'react-native'

import styled from 'styled-components/native'

import AppBar from './components/AppBar'
import ToolBAr from './components/ToolBar'
import User from './components/User'
import Story from './components/Story'
import Feed from './components/Feed'

const Container = styled.SafeAreaView`
flex: 1;
`

const App = () => {
  return (
  <>
  <StatusBar
    backgroundColor="#FFFFFF"
    barStyle="dark-content"
  />
  <Container>
    <ScrollView>
      <AppBar />
      <ToolBAr />
      <User />
      <Story />
      <Feed />
    </ScrollView>
  </Container>
  </>
  )
}

export default App;
