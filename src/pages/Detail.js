import React from "react";
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { useParams } from 'react-router';
import { Layout } from "../components/Layout";


export const Detail = ({ detailId }) => {
    const params = useParams()
    return (
        <Layout title={`Foto ${params.detailId}`}>
            <PhotoCardWithQuery id={params.detailId}/>
        </Layout> 
    )
}