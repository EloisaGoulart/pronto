import React from "react";
import { FlatList } from "react-native";

// Layout dos produtos
import Item from "./Item";

export default function Index({itens}:any) {
    return <FlatList 
                data={itens.lista}
                renderItem={({item})=> <Item cadaProduto={item}/>}
                keyExtractor={(item)=>item.nome}
             />
}