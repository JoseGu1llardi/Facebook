import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native'

import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import Avatar from './Avatar'

const Container = styled.View`
    flex: 1;
`

const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 9px;
    padding: 0 11px; 
`

const Row = styled.View`
    align-items: center;
    flex-direction: row;
`

const User = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #222121;
`

const Time = styled.Text`
    font-size: 9px;
    color: #747476;
`

const Post = styled.Text`
    font-size: 15px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`

const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 600px
`

const Footer = styled.View`
    padding: 0 11px;
`

const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`

const IconCount = styled.View`
    background: #1878f3;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`

const TextCount = styled.Text`
    font-size: 11px;
    color: #424040
`

const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: #F9F9F9
`

const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`

const Button = styled.TouchableOpacity`
    flex-direction: row;
`

const Icon = styled.View`
    margin-right: 6px;
`

const Text = styled.Text`
    font-size: 16px;
    color: #424040;
`

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #f0f2f5;
`

const Feed = () => {
    return( 
    <>
        <Container>
            <Header>
                <Row>
                    <Avatar source={require('../assets/nba.jpg')}/>
                    <View style={{paddingLeft: 10}}>
                        <User>NBA</User>
                        <Row>
                            <Time>15m</Time>
                            <Entypo name='dot-single' size={12} color='#747476'/>
                            <Entypo name='globe' size={10} color='#747476'/>
                        </Row>
                    </View>
                </Row>

                <Entypo name='dots-three-horizontal' size={15} color='#222121'/>

            </Header>

            <Post>
            Who will go #1?
Dreams become reality at the 2020 #NBADraft presented by State Farm on Wednesday, November 18th at 8pm/et on ESPN!
            </Post>
            <Photo source={require('../assets/jogo.jpg')}/>

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name='like1' size={12} color='#FFFFFF'/>
                        </IconCount>
                        <TextCount>13 like</TextCount>
                    </Row>
                    <TextCount>2 comments</TextCount>
                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign name='like2' size={20} color='#424040'/>
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#424040'/>
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name='share-outline' size={20} color='#424040'/>
                        </Icon>
                        <Text>Share</Text>
                    </Button>

                </FooterMenu>

            </Footer>
            <BottomDivider />
        </Container>

        <Container>
            <Header>
                <Row>
                    <Avatar source={require('../assets/story7.jpg')}/>
                    <View style={{paddingLeft: 10}}>
                        <User>Amanda Éllen</User>
                        <Row>
                            <Time>1h</Time>
                            <Entypo name='dot-single' size={12} color='#747476'/>
                            <Entypo name='globe' size={10} color='#747476'/>
                        </Row>
                    </View>
                </Row>

                <Entypo name='dots-three-horizontal' size={15} color='#222121'/>

            </Header>

            <Post>
            Sigo convicta que pra eu sorrir ninguém precisa chorar.. 💃🏽
            </Post>
            <Photo source={require('../assets/user7.jpg')}/>

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name='like1' size={12} color='#FFFFFF'/>
                        </IconCount>
                        <TextCount>13 like</TextCount>
                    </Row>
                    <TextCount>2 comments</TextCount>
                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign name='like2' size={20} color='#424040'/>
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#424040'/>
                        </Icon>
                        <Text>Comment</Text>
                    </Button>
                    
                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name='share-outline' size={20} color='#424040'/>
                        </Icon>
                        <Text>Share</Text>
                    </Button>

                </FooterMenu>

            </Footer>
            <BottomDivider />
        </Container>
    </>
    )
}

export default Feed;