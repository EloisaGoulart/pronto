import React from "react";
import { useFonts, Montserrat_300Light, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SobreNos from "./src/telas/SobreNos";
import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/telas/Produtos/listaProduto";
import PerfilCamera from "./src/telas/Perfil/expo-camera";
import ListaDeDesejos from "./src/telas/Lista de Desejos/Lista";
import { FavoritosProvider } from "./src/telas/Lista de Desejos/FavoritosContext";

function MenuProdutos() {
  return <Produto {...MockProdutos} />;
}

function Perfil() {
  return <PerfilCamera />;
}

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icoName: string = "";

          if (route.name === "Sobre Nós") {
            icoName = focused ? "cafe" : "flower-outline";
          } else if (route.name === "Produtos") {
            icoName = focused ? "bag" : "bag-outline";
          } else if (route.name === "Lista de Desejos") {
            icoName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Perfil") {
            icoName = "ellipsis-horizontal-outline";
          }

          return <Ionicons name={icoName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6A6332",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Sobre Nós" component={SobreNos} />
      <Tab.Screen name="Produtos" component={MenuProdutos} />
      <Tab.Screen name="Lista de Desejos" component={ListaDeDesejos} />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    "FonteRegular": Montserrat_300Light,
    "FonteBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return null;
  }

  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
    </FavoritosProvider>
  );
}


