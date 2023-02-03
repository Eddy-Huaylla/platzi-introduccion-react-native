import React from "react";
import { Text } from "react-native";

export const Greed = ( props ) => {
  const { firstName, lastName } = props;

  return <Text>Hola, { firstName } {lastName } </Text>
}

Greed.defaultProps = {
  firstName : 'Eddy',
  lastName : 'Huaylla Quispe'
}
