import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

function HomeScreen() {
    return (
      <ScrollView>
      <View style={styles.feed}>
    <View style={[styles.card, {backgroundColor: '#997794'}]}>
      <Text style={styles.CardText}>World</Text>
      </View>
    <View style={[styles.card, {backgroundColor: '#339966'}]} 
    >
      <Text>Science</Text>
      </View>
    <View style={[styles.card, {backgroundColor: '#996633'}]}>
      <Text>
        Health

      </Text>
      </View>
    <View style={[styles.card, {backgroundColor: '#669933'}]}>
      <Text>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#669933'}]}>
      <Text>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#669933'}]}>
      <Text>Sports</Text>
      </View>
     
      <View style={[styles.card, {backgroundColor: '#669933'}]}>
      <Text>Sports</Text>
      </View>
 </View>
 </ScrollView>
    )
    }
export default HomeScreen

const styles = StyleSheet.create({
  
feed: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 16,
  backgroundColor: 'white',
  justifyContent: 'space-between',
 },
  
  CardText :{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    


  },
 card: {
  width: '48%',
  height: '10%',

  aspectRatio: 1,
  borderRadius: 20,
  marginBottom: 16  
  
}
})