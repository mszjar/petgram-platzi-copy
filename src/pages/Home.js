import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from 'react-router';

export const Home = ({ categoryId }) => {
    const params = useParams()
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.categoryId} />
        </Fragment>
    )
}

 