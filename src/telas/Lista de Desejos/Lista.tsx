import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Texto from "../../Componentes/Texto";
import { useFavoritos } from "./FavoritosContext";
import { Ionicons } from "@expo/vector-icons";

export default function ListaDeDesejos() {
  const { favoritos, removerFavorito } = useFavoritos();

  return (
    <View style={styles.container}>
      <View style={styles.tituloBloco}>
        <Texto style={styles.iconeHeader}>♡</Texto>
        <Texto style={styles.titulo}>
          <Texto style={styles.tituloDestaque}>Meus Favoritos</Texto>
        </Texto>
      </View>
      <Texto style={styles.slogan}>
        Aqui ficam os produtos que você mais ama!
      </Texto>
      <View style={styles.card}>
        {favoritos.length === 0 ? (
          <>
            <Texto style={styles.vazio}>Sua lista está vazia.</Texto>
            <Texto style={styles.subtexto}>
              Toque no ícone de coração nos produtos para salvá-los aqui e acompanhar seus itens favoritos!
            </Texto>
          </>
        ) : (
          favoritos.map((item) => (
            <View key={item.id} style={styles.favoritoItem}>
              <Image source={item.imagem} style={styles.favoritoImagem} resizeMode="contain" />
              <View style={styles.favoritoInfo}>
                <Texto style={styles.favoritoNome}>{item.nome}</Texto>
                <Texto style={styles.favoritoDescricao}>{item.descricao}</Texto>
                <View style={styles.tagContainer}>
                  <Texto style={styles.tag}>Favorito</Texto>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removerBotao}
                onPress={() => removerFavorito(item.id)}
                accessibilityLabel="Remover dos favoritos"
              >
                <Ionicons name="trash-outline" size={22} color="#bfae8e" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
      {/* Removido o rodapé com a dica */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f4ef",
    paddingHorizontal: 16,
    paddingTop: 48,
    alignItems: "center",
  },
  tituloBloco: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 0,
    gap: 12,
    backgroundColor: "#e6e3d0",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#6A6332",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  titulo: {
    fontSize: 28,
    color: "#6A6332",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 0,
    marginTop: 0,
  },
  tituloDestaque: {
    color: "#6A6332",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 2,
    textShadowColor: "#e6e3d0",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  iconeHeader: {
    fontSize: 38,
    color: "#6A6332",
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginRight: 4,
  },
  slogan: {
    color: "#8d885c",
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#e6e3d0",
    borderRadius: 16,
    padding: 28,
    alignItems: "center",
    width: "100%",
    shadowColor: "#6A6332",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 24,
  },
  vazio: {
    color: "#6A6332",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtexto: {
    color: "#8d885c",
    fontSize: 15,
    textAlign: "center",
    opacity: 0.85,
    paddingHorizontal: 10,
  },
  favoritoItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#6A6332",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  favoritoImagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: "#f9f4ef",
    borderWidth: 1,
    borderColor: "#e6e3d0",
  },
  favoritoInfo: {
    flex: 1,
  },
  favoritoNome: {
    color: "#6A6332",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  favoritoDescricao: {
    color: "#8d885c",
    fontSize: 14,
  },
  tagContainer: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#e6e3d0",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  tag: {
    color: "#6A6332",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  rodape: {
    marginTop: 24,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  rodapeTexto: {
    color: "#8d885c",
    fontSize: 13,
    textAlign: "center",
    opacity: 0.8,
  },
  removerBotao: {
    marginLeft: 10,
    padding: 6,
    borderRadius: 16,
    backgroundColor: "#f9f4ef",
    alignItems: "center",
    justifyContent: "center",
  },
});
