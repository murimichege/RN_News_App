import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import HealthScreen from '../../Navigation/Screens/HealthScreen'
function HomeScreen() {
    return (
      <ScrollView>
      <View style={styles.feed}>
    <View style={[styles.card, {backgroundColor: '#CCAAC7'}]}>
      <Text style={styles.CardText}>World</Text>
      </View>
    <View style={[styles.card, {backgroundColor: '#80E6B3'}]} 
    >
      <Text style={styles.CardText}>Science</Text>
      </View>
    <View style={[styles.card, {backgroundColor: '#E6B380'}]}>
    <TouchableOpacity
        style={styles.CardText}
        onPress={() => navigation.navigate('HealthScreen')}
      >
        <Text>Health</Text>
      </TouchableOpacity>
      </View>
    <View style={[styles.card, {backgroundColor: '#99CC66'}]}>
      <Text style={styles.CardText}>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#696863'}]}>
      <Text style={styles.CardText}>Politics</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#84a1c2'}]}>
      <Text style={styles.CardText}>Business</Text>
      </View>
     
      <View style={[styles.card, {backgroundColor: '#FFC1FF'}]}>
      <Text style={styles.CardText}>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#d69057'}]}>
      <Text style={styles.CardText}>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#5790d6'}]}>
      <Text style={styles.CardText}>Sports</Text>
      </View>
      <View style={[styles.card, {backgroundColor: '#d8ce5f'}]}>
      <Text style={styles.CardText}>Sports</Text>
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
    alignItems: 'flex-end'
  },
 card: {
  width: '48%',
  height: '10%',
  alignSelf: 'flex-start',
  aspectRatio: 1,
  borderRadius: 20,
  marginBottom: 16  
  
}
})