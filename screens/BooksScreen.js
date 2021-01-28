/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import BooksList from './BooksData';

function BooksScreen({route, navigation}) {
  // Déclare des nouvelles variables d'état dans ce composant « AllBooksScreen »
  const [books, setBooks] = useState(BooksList);
  const [filteredBooks, setFilteredBooks] = useState(null);

  useEffect(() => {
    /* 2. Get the param */
    const {title} = route.params;
    let cat = title;
    let filteredList = books.filter((book) => {
      return book.category === cat;
    });

    setFilteredBooks(filteredList);
  }, [books, route.params]);

  const loadBooks = (book) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BooksDetail', {
            id: book.item.id,
            category: book.item.category,
            title: book.item.title,
            author: book.item.author,
            votes: book.item.votes,
            rating: book.item.rating,
            image: book.item.image,
          });
        }}>
        <View style={styles.bookMain}>
          <View style={{width: '100%', overflow: 'hidden', height: 452}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: book.item.image}}
            />
          </View>
          <View style={styles.book}>
            <Text style={styles.text}>{book.item.title}</Text>
            <Text style={styles.text}> by {book.item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList data={filteredBooks} renderItem={loadBooks} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  bookMain: {
    marginTop: 10,
    width: '100%',
    height: 500,

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  book: {
    backgroundColor: '#00F739',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    overflow: 'hidden',
    paddingVertical: 14,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    // fontFamily: 'halfmoon_bold',
    fontSize: 15,
  },
});

export default BooksScreen;
