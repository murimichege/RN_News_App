import React, {useContext} from 'react'
import {ScrollView,StyleSheet,Image} from 'react-native'
import  {NewsContext} from '../Context/Context'
import{ListItem, Card} from 'react-native-elements'
import moment from 'moment'
function HomeScreen() {
    const News = useContext(NewsContext)

    return (
        
        <ScrollView style={styles.Container}>

            {
                News.data.articles && News.data.articles.map((l, index) => {
                    return (
                        <Card key={index}>
                        <ListItem  bottomDivider>
                            
                            <ListItem.Content>
                                <ListItem.Title>
                                    {l.title}
                                </ListItem.Title>
                                <Card.Image source={{uri:l.urlToImage}} />
                                
                                <ListItem.Subtitle>
                                    {l.source.name}         
                                </ListItem.Subtitle>
                                <ListItem.Subtitle>
                                {moment(l.publishedAt).fromNow}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            
                            
                           
                        </ListItem>
                        </Card>
                    )

                })
            }

        </ScrollView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    resizeMode: 'cover'
    }
})
