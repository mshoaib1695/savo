
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import { Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Home extends Component {
    

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#a928bd' }}>
                    <Left>
                        <Button bage transparent 
                            onPress={() => {
                                this.props.navigation.openDrawer();
                            }}
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button badge transparent active >
                            <Icon name="apps" />
                            <Badge><Text>2</Text></Badge>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>
                        This is Content Section
          </Text>
                </Content>
                <Footer >
                    <FooterTab style={{ backgroundColor: '#a928bd' }}>
                        <Button>

                            <Icon name="home" />
                            <Text>Dashboard</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#a928bd' }}>
                        <Button>
                            <Icon name="search" />
                            <Text>Search</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#a928bd' }}>
                        <Button>
                            <Icon name="contact" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}