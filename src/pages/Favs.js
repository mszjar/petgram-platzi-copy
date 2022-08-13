import React from "react";
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from "../components/Layout";


export const Favs = () => {
    return (
        <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
            <FavsWithQuery />
        </Layout>
    )
}