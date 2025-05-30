import React, { useState, useRef } from "react";
import { Card, Modal, Button } from "react-native-paper";
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";

import Texto from "../../Componentes/Texto";
import { useFavoritos, ProdutoFavorito } from "../Lista de Desejos/FavoritosContext";

interface Produto extends ProdutoFavorito {}

interface ItemProps {
    cadaProduto: Produto;
}

export default function Item({ cadaProduto }: ItemProps) {
    const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();
    const [modalVisible, setModalVisible] = useState(false);
    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const isFavorito = favoritos.some((item) => item.id === cadaProduto.id);

    const handleFavoritar = () => {
        if (isFavorito) {
            removerFavorito(cadaProduto.id);
        } else {
            adicionarFavorito(cadaProduto);
        }
    };

    const {
        id,
        nome,
        preco,
        imagem,
        descricao,
        descricaoDetalhada,
        slider = [],
    } = cadaProduto;

    const handleNext = () => {
        if (pagerRef.current && currentPage < slider.length - 1) {
            pagerRef.current.setPage(currentPage + 1);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (pagerRef.current && currentPage > 0) {
            pagerRef.current.setPage(currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Card mode="elevated" style={styles.card}>
                <Card.Cover source={imagem} style={styles.image} />
                <Card.Content>
                    <Texto style={styles.boldText}>{nome}</Texto>
                    <Texto>{descricao}</Texto>
                    <Texto style={styles.price}>R$ {(preco || 0).toFixed(2)}</Texto>
                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <Button
                        icon={() => <Ionicons name="list" size={16} color="white" />}
                        mode="contained"
                        buttonColor="#6A6332"
                        onPress={() => setModalVisible(true)}
                        labelStyle={styles.buttonText}
                    >
                        Detalhes
                    </Button>
                    <TouchableOpacity key={id} onPress={handleFavoritar}>
                        <Ionicons
                            name={isFavorito ? "heart" : "heart-outline"}
                            size={24}
                            color={isFavorito ? "red" : "gray"}
                        />
                    </TouchableOpacity>
                </Card.Actions>
            </Card>

            <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modal}>
                <Texto style={styles.nomeProduto}>{nome}</Texto>
                <Texto style={styles.descricaoDetalhada}>{descricaoDetalhada || descricao}</Texto>
                {slider.length > 0 ? (
                    <View>
                        <PagerView
                            ref={pagerRef}
                            style={styles.pagerView}
                            initialPage={0}
                            onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
                        >
                            {slider.map((img: any, index: number) => (
                                <View key={index} style={styles.sliderItem}>
                                    <Image source={img} style={styles.sliderImage} resizeMode="contain" />
                                </View>
                            ))}
                        </PagerView>
                        <View style={styles.carouselButtons}>
                            <Button
                                mode="outlined"
                                onPress={handlePrevious}
                                disabled={currentPage === 0}
                                style={styles.carouselButton}
                            >
                                Anterior
                            </Button>
                            <Button
                                mode="outlined"
                                onPress={handleNext}
                                disabled={currentPage === slider.length - 1}
                                style={styles.carouselButton}
                            >
                                Próximo
                            </Button>
                        </View>
                    </View>
                ) : (
                    <Image source={imagem} style={styles.modalImage} resizeMode="contain" />
                )}
                <Button
                    mode="contained"
                    buttonColor="#6A6332"
                    onPress={() => setModalVisible(false)}
                    labelStyle={styles.buttonText}
                >
                    Fechar
                </Button>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    card: {
        borderRadius: 8,
        overflow: "hidden",
        height: 600,
    },
    image: {
        width: "100%",
        height: "70%",
        resizeMode: "cover",
        marginBottom: 16,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#556B2F",
        marginBottom: 12,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6A6332",
        marginTop: 8,
    },
    actions: {
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    modal: {
        backgroundColor: "white",
        padding: 28,
        margin: 16,
        borderRadius: 12,
        alignItems: "center",
        minWidth: 320,
        maxWidth: "95%",
    },
    modalImage: {
        width: 200,
        height: 200,
        marginVertical: 16,
    },
    nomeProduto: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 12,
    },
    descricaoDetalhada: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        textAlign: "center",
        marginBottom: 16,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    pagerView: {
        width: Dimensions.get("window").width * 0.9,
        height: 250,
        marginVertical: 16,
    },
    sliderItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    sliderImage: {
        width: "100%",
        height: "100%",
    },
    carouselButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    carouselButton: {
        marginHorizontal: 8,
    },
});