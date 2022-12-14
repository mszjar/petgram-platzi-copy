import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from 'react-router';
import { Layout } from "../components/Layout";


const HomePage = ({ categoryId }) => {
    const params = useParams()
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy perros'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.categoryId} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})