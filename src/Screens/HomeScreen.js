import React, {useContext} from 'react'
import  {NewsContext} from '../Context/Context'
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

function HomeScreen() {
    const News = useContext(NewsContext)

    return (
        <Container>
            <View>
            {
              News.data.map((l,index)=>{
                 return (
                    <Card key={index} >
                    <CardItem>
                          <Text >{l.title}</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: l.media}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Text>{l.description}</Text>
                      <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>By: {l.dc}</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Text>{l.pubDate}</Text>
                      </Right>
                    </CardItem>
                  </Card>

                 )


             })
             
            }

        </View>

        </Container>

        
    )
}

export default HomeScreen
