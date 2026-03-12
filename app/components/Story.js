import React from 'react';

import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import {AntDesign} from '@expo/vector-icons'

import Avatar from './Avatar'

const Container = styled.View`
    width: 100%;
    height: 192px;
    flex-direction: row;
    align-items: center;
`
const Card = styled.View`
    width: 106px;
    height: 170px;
    position: relative;
    margin-right: 8px;
`

const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 12px;
`

const CardUser = styled.View`
    position: absolute;
    top:4px;
    left: 72px;
    background: #FFFFFF;
    border-radius: 20px;
    width: 29px;
    height: 29px;
    align-items: center;
    justify-content: center;
`

const CardUser2 = styled.View`
    position: absolute;
    top:10px;
    left: 67px;
    background: #FFFFFF;
    border-radius: 20px;
    width: 29px;
    height: 29px;
    align-items: center;
    justify-content: center;
`

const CardFooter = styled.View`
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 9px;
`

const Text = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4)
`

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #f0f2f5;
`

const Story = () => {
    return <>
        <Container>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:11}}> 
                <Card>
                    <CardStory source={require('../assets/user6.jpg')}/>
                
                    <CardUser>
                        <AntDesign name='plus' size={24} color='#1777f2'/>
                    </CardUser>
                    <CardFooter>
                        <Text>Add To Story</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={require('../assets/story2.jpg')}/>
                    <CardUser2>
                        <Avatar source={require('../assets/user2.jpg')} story={true}/>
                    </CardUser2>
                    <CardFooter>
                        <Text>Wanessa J.</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={require('../assets/story4.jpg')}/>
                    <CardUser2>
                        <Avatar source={require('../assets/user8.jpg')} story={true}/>
                    </CardUser2>
                    <CardFooter>
                        <Text>Victor</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={require('../assets/story7.jpg')}/>
                    <CardUser2>
                        <Avatar source={require('../assets/user7.jpg')} story={true}/>
                    </CardUser2>
                    <CardFooter>
                        <Text>Amanda Ellen</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={require('../assets/story3.jpg')}/>
                    <CardUser2>
                        <Avatar source={require('../assets/user4.jpg')} story={true}/>
                    </CardUser2>
                    <CardFooter>
                        <Text>Wanessa J.</Text>
                    </CardFooter>
                </Card>
            </ScrollView>
        </Container>
        <BottomDivider />
    </>
}

export default Story