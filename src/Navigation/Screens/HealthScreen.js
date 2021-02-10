import React, {useState,useEffect} from 'react'
import {ScrollView,StyleSheet,Image, ActivityIndicator} from 'react-native'
import{ListItem, Card} from 'react-native-elements'
import moment from 'moment'
import {getHealthNews} from '../../APIs/API'
import axios from 'axios'
function HealthScreen() {
    
     
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            const fetchedData = await axios.get('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=MXgFv0iccABKrdUHqwR8LpdNZMoUF7cI')
            setData(fetchedData.data)
            console.log(fetchedData)
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

                            <ListItem.Content>
                                <ListItem.Title>
                                    {l.title}
                                </ListItem.Title>
                                <Card.Image source={l.multimedia.url}>


                                <ListItem.Subtitle>
                                    {l.abstract}         
                                </ListItem.Subtitle>
                                <ListItem.Subtitle>
                                {l.published_date}
                                </ListItem.Subtitle>
                                </Card.Image>
                            </ListItem.Content>   
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
