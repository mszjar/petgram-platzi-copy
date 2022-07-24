import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from 'react-router';

export const Home = ({ id }) => {
    const params = useParams()
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id} />
        </Fragment>
    )
}

/* export const Home = () => {
      const params = useParams()
      return (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={params.id} />
        </Fragment>
      )
    } */