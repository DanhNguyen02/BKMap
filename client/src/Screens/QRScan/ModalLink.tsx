import { View, Text } from "native-base";
import React from "react";

const ModalLink: React.FC<{ data: string }> = ({ data }) => {
  return (
    <View>
      <Text>ModalLink</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ModalLink;
