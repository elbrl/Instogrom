import { View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function Phone({ navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Photos");
        }}
      >
        <MaterialIcons name="add-to-photos" size={60} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Camer");
        }}
      >
        <AntDesign name="camera" size={60} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Instogrom");
        }}
      >
        <AntDesign name="instagram" size={60} color="black" />
      </TouchableOpacity>
    </View>
  );
}
