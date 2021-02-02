import React, {useState,useEffect} from 'react'
import {ScrollView,StyleSheet,Image, ActivityIndicator} from 'react-native'
import{ListItem, Card} from 'react-native-elements'
import moment from 'moment'
import getHealthNews from '../APIs/APIs'
function HealthScreen() {
    
     
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            const fetchedData = await getHealthNews()
            setData(fetchedData)
            setisLoading(false)
        }
        fetchData();
            
       
    },[])

    if(isLoading)
    {
        return <ActivityIndicator/>
    }

    return (
        
        <ScrollView style={styles.Container}>
          

            {
              data.results.map((l, index) => {
                    return (
                        <Card key={index}>
                        <ListItem  bottomDivider>
                        <Card.Image source={require(l.multimedia.url)}>

                            <ListItem.Content>
                                <ListItem.Title>
                                    {l.title}
                                </ListItem.Title>

                                <ListItem.Subtitle>
                                    {l.abstract}         
                                </ListItem.Subtitle>
                                <ListItem.Subtitle>
                                {moment(l.published_date).fromNow}
                                </ListItem.Subtitle>
                                <ListItem.Subtitle>
                                {moment(l.publishedAt).fromNow}
                                </ListItem.Subtitle>
                            </ListItem.Content>   
                            </Card.Image> 
                        </ListItem>
                        </Card>
                    )

                })
            }

        </ScrollView>
    )
}

export default HealthScreen
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    resizeMode: 'cover'
    },
    input: {
        borderRadius: 20,
        width: 100,
        height: 20
    }

})
