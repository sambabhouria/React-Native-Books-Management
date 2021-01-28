/* eslint-disable radix */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FitImage from 'react-native-fit-image';
import {Rating} from 'react-native-ratings';

function BooksDetailScreen({route}) {
  /* 2. Get the param */
  console.log(
    '🚀 ~ file: BooksDetailScreen.js ~ line 10 ~ BooksDetailScreen ~ route',
    route.params,
  );

  const {id, category, title, author, votes, rating, image} = route.params;
  const ratingValue = Math.floor(parseInt(rating));

  return (
    <ScrollView>
      <View style={styles.main}>
        <FitImage source={{uri: image}} style={styles.fitImage} />
        <View style={styles.infoBox}>
          <Text>Book Title</Text>
          <Text style={styles.propText}>{title}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>Written By</Text>
          <Text style={styles.propText}>{author}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>Category</Text>
          <Text style={styles.propText}>{category}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>Votes</Text>
          <Text style={styles.propText}>{votes}</Text>
        </View>
        <View style={styles.rating}>
          <Rating
            readonly
            startingValue={ratingValue}
            ratingCount={5}
            imageSize={40}
            showRating
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  rating: {
    marginTop: 10,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  fitImage: {
    borderRadius: 20,
    zIndex: -1,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText: {
    fontSize: 15,
  },
  propText: {
    fontSize: 15,
  },
});

export default BooksDetailScreen;
