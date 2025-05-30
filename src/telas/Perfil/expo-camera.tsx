import React, { useState } from "react";
import { Card } from "react-native-paper";
import { View, TextInput, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from "react-native-vector-icons/Ionicons";

import Texto from "../../Componentes/Texto";
import styles from "./estilosperfil";

export default function PerfilCamera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Texto style={styles.message}>
          Precisamos da sua autorização para exibir a câmera.
        </Texto>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionButton}
        >
          <Texto style={styles.permissionButtonText}>Permitir</Texto>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <Texto style={styles.tituloPerfil}>Seu Perfil</Texto>
      <CameraView facing={facing} style={styles.camera}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse-outline" size={30} color="#6A6332" />
          </TouchableOpacity>
        </View>
      </CameraView>

      <Card mode="elevated" style={styles.cardContainer}>
        <Card.Content>
          <Texto style={styles.text}>Nome completo</Texto>
          <TextInput style={styles.input} placeholder="Adicione seu nome" placeholderTextColor="#aaa" />

          <Texto style={styles.text}>E-mail</Texto>
          <TextInput style={styles.input} placeholder="seuemail@gmail.com" placeholderTextColor="#aaa" keyboardType="email-address" />

          <Texto style={styles.text}>WhatsApp</Texto>
          <TextInput style={styles.input} placeholder="(11) 9000-000" placeholderTextColor="#aaa" keyboardType="phone-pad" />
        </Card.Content>
      </Card>
    </View>
  );
}
