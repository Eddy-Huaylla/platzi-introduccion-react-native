import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";


export const Greed = ( props ) => {
  const { firstName, lastName, live } = props;

  return <Text>Hola, { firstName } {lastName }. Vives en { live } </Text>
}

Greed.defaultProps = {
  firstName : 'Eddy',
  lastName : 'Huaylla Quispe'
}

Greed.propTypes = {
  firstName : PropTypes.string.isRequired,
  lastName : PropTypes.string,
  live : PropTypes.string.isRequired,
}
