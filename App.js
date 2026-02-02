import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

/* ===== COMPONENT CON ===== */
const ColorButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

/* ===== COMPONENT CHA ===== */
export default function App() {
  // STATE
  const [background, setBackground] = useState('green');

  // CALLBACK
  const handleChangeColor = (color) => {
    setBackground(color);
    Alert.alert('Thông báo', `Bạn đã chọn màu ${color}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <ColorButton
        title="GREEN"
        color="green"
        onPress={() => handleChangeColor('green')}
      />
      <ColorButton
        title="BLUE"
        color="blue"
        onPress={() => handleChangeColor('blue')}
      />
      <ColorButton
        title="BROWN"
        color="brown"
        onPress={() => handleChangeColor('brown')}
      />
      <ColorButton
        title="YELLOW"
        color="yellow"
        onPress={() => handleChangeColor('yellow')}
      />
      <ColorButton
        title="RED"
        color="red"
        onPress={() => handleChangeColor('red')}
      />
      <ColorButton
        title="BLACK"
        color="black"
        onPress={() => handleChangeColor('black')}
      />
    </View>
  );
}

/* ===== STYLE ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
