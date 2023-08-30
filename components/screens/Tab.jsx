import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  Ionicons,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Home } from "./Home";
import { Search } from "./Search";
import { Post } from "./NewPost";
import { Reels } from "./Reels";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();

export function Tabshit() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Instogrom"
        component={Home}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: () => (
            <Octicons name="diff-added" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="video-collection" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
