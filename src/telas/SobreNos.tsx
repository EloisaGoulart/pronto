import React from "react";
import { StatusBar, StyleSheet, View, Image, ScrollView } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import Texto from "../Componentes/Texto"; // Confirme se o caminho está correto

export default function SobreNos() {
    const player = useVideoPlayer(
        'https://drive.google.com/uc?export=download&id=1p71OkoOzCbOWSYXVkimeZa2WOpZ-5itj',
        player => {
            player.loop = true;
            player.play();
        }
    );

    return (
        <ScrollView style={estilos.fundo} contentContainerStyle={estilos.scrollContent}>
            <StatusBar barStyle="dark-content" />
            <View style={estilos.headerContainer}>
                <Image
                    source={require('../../assets/hecho.png')} // Confirme se o arquivo está em assets
                    style={estilos.img_logo}
                    resizeMode="contain"
                />
                <Texto style={estilos.slogan}>
                    Requinte, autenticidade e o melhor do feito à mão.
                </Texto>
            </View>
            <View style={estilos.bloco}>
                <Texto style={estilos.titulo}>Sobre Nós</Texto>
                <Texto style={estilos.texto_sobre_bloco}>
                    A Hecho celebra o requinte do feito à mão. Somos especializados em velas aromáticas, aromatizantes, home spray, louças decoradas e peças em crochê e macramê. Cada criação é cuidadosamente elaborada, unindo autenticidade, sofisticação e atenção aos detalhes para transformar ambientes e experiências.
                </Texto>
            </View>
            <Image
                source={require('../../assets/Prato.png')} // Confirme se o arquivo está em assets
                style={estilos.img_prato}
                resizeMode="contain"
            />
            <VideoView
                player={player}
                style={estilos.video}
                allowsFullscreen
                allowsPictureInPicture
            />
            <View style={estilos.bloco}>
                <Texto style={estilos.titulo}>Produtos em Destaque</Texto>
                <Texto style={estilos.texto_sobre_bloco}>
                    Explore nossa coleção de almofadas, painéis de macramê e sousplats, todos feitos à mão com o estilo exclusivo de Hecho. Cada peça é única e traz um toque especial para sua decoração.
                </Texto>
            </View>
            <View style={estilos.contatoBarra}>
                <Texto style={estilos.contatoInfoBarra}>
                    Telefone: <Texto style={estilos.contatoDestaque}>4043-1934</Texto>
                    <Texto style={estilos.separador}> | </Texto>
                    Email: <Texto style={estilos.contatoDestaque}>lojahecho@gmail.com</Texto>
                </Texto>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#f9f4ef",
    },
    scrollContent: {
        paddingVertical: 18,
        paddingHorizontal: 18,
        paddingBottom: 32,
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 10,
        marginTop: -25,
    },
    img_logo: {
        width: 430,
        height: 230,
        alignSelf: 'center',
        marginBottom: 4,
    },
    slogan: {
        color: "#6A6332",
        fontSize: 15,
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    bloco: {
        backgroundColor: "#e6e3d0",
        borderRadius: 14,
        padding: 18,
        marginVertical: 10,
        shadowColor: "#6A6332",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#6A6332",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 1,
        textTransform: "uppercase",
    },
    texto_sobre_bloco: {
        color: "#8d885c",
        fontSize: 16,
        lineHeight: 26,
        textAlign: "center",
        paddingHorizontal: 6,
        opacity: 1,
    },
    img_prato: {
        width: 460,
        height: 240,
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 18,
    },
    video: {
        width: "100%",
        height: 285,
        alignSelf: "center",
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 24,
        backgroundColor: "#e6e3d0",
    },
    contatoBarra: {
        backgroundColor: "#6A6332",
        paddingVertical: 4,
        paddingHorizontal: 18,
        marginTop: 28,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        minHeight: 28,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        elevation: 1,
        width: "auto",
        maxWidth: "90%",
    },
    contatoInfoBarra: {
        color: "#fff",
        fontSize: 15,
        flexDirection: "row",
        textAlign: "center",
        fontWeight: "400",
        letterSpacing: 0.3,
        opacity: 0.95,
        paddingVertical: 2,
    },
    contatoDestaque: {
        color: "#fff",
        fontWeight: "bold",
        opacity: 1,
    },
    separador: {
        color: "#fff",
        fontWeight: "bold",
        opacity: 0.7,
        fontSize: 16,
        marginHorizontal: 4,
    },
});