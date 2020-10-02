import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <Pressable

          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'white'
                : 'white'
            },
            styles.wrapperCustom
          ]}>
          {({ pressed }) => (
            <View>
              <Text style={styles.text}>
                {pressed ? 'Pressed!' : 'Press Me'}
              </Text>
              <View>
                <Text>This is a thing</Text>
              </View>
              <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
              </View>
            </View>
          )}
        </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;