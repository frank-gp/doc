import React from "react";
import { Button, NativeModules, StyleSheet, Text, View } from "react-native";

const { ToastModule } = NativeModules;

const IndexScreen = () => {
  const showToast = () => {
    ToastModule.show("Hola desde Kotlin!", 0); // 0 = Toast.LENGTH_SHORT
  };

  return (
    <View style={styles.container}>
      <Text>IndexScreen</Text> <Button title="Mostrar Toast" onPress={showToast} />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
