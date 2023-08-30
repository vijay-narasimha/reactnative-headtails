import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Popable } from 'react-native-popable';
import { Picker } from '@react-native-picker/picker';
import styles from './styles.js';

export default function App() {
  const [matrix, setMatrix] = useState([]);
  const [value, setValue] = useState('0');
  const [error, setError] = useState(false);

  function deleteValue(column, row) {
    const copyMatrix = [...matrix];
    copyMatrix[column].splice(row, 1);
    setMatrix(copyMatrix);
  }

  function addIntoMatrix(value) {
    if (matrix.length === 0) {
      const newItem = [value];
      setMatrix([newItem]);
    } else {
      if (matrix[matrix.length - 1][0] === value) {
        matrix[matrix.length - 1].push(value);
      } else {
        matrix.push([value]);
      }
      setMatrix(matrix);
    }

    setValue('0');
  }

  function handleChange(newValue) {
    setValue(newValue);
    setError(false);
  }

  function handleSubmit() {
    if (value === '0') {
      setError(true);
    } else {
      addIntoMatrix(value);
    }
  }

  console.log(matrix);

  let displayMatrix = null;
  if (matrix.length > 0) {
    displayMatrix = matrix.map((items, column) => {
      const itemDisplay = items.map((item, row) => {
        if (item.length) {
          return (
            <Popable
              content={`row:${row + 1};column:${column + 1}`}
              action='hover'
              key={column}
            >
              <TouchableOpacity
                style={styles.item}
                onPress={() => deleteValue(column, row)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            </Popable>
          );
        }
      });
      return (
        <View key={column} style={styles.column}>
          {itemDisplay}
        </View>
      );
    });
  }
  

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.title}>Heads and Tails</Text>
      <View style={styles.box} >
        <Picker
          style={styles.inputBox}
          selectedValue={value}
          onValueChange={handleChange}
        >
          <Picker.Item label='Select value' value='0' />
          <Picker.Item label='Heads' value='H' />
          <Picker.Item label='Tails' value='T' />
        </Picker>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={styles.errMessage}>
          Invalid Option.. Please pick any Option
        </Text>
      )}
      <View style={styles.showMatrix}>{displayMatrix}</View>
    </View>
  );
}




