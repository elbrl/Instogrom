import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Kamera } from "./Camer";
import { Tabshit } from "./Tab";
import Phone from "./Phone";
import Photos from "../photos";

const Stack = createNativeStackNavigator();

export function Stackshit() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Photos" component={Photos} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Camer"
        component={Kamera}
      />
      <Stack.Screen name="Instogrom" component={Tabshit} />
    </Stack.Navigator>
  );
}
