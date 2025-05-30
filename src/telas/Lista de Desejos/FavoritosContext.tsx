import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipagem para produto favorito
export interface ProdutoFavorito {
  id: number;
  nome: string;
  preco: number;
  imagem: any;
  descricao: string;
  descricaoDetalhada?: string;
  slider?: any[];
}

interface FavoritosContextType {
  favoritos: ProdutoFavorito[];
  adicionarFavorito: (produto: ProdutoFavorito) => void;
  removerFavorito: (id: number) => void;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<ProdutoFavorito[]>([]);

  function adicionarFavorito(produto: ProdutoFavorito) {
    setFavoritos((prev) =>
      prev.some((item) => item.id === produto.id) ? prev : [...prev, produto]
    );
  }

  function removerFavorito(id: number) {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos deve ser usado dentro de um FavoritosProvider");
  }
  return context;
}
