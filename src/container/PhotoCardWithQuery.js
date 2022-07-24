import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { Query } from '@apollo/client/react/components';
import { render } from "react-dom";


const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

const renderProp = ({ loading, error, data = { photo: {} } }) => {
    const { photo = {} } = data;
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error!</h2>
    return (< PhotoCard {...photo} ></PhotoCard>)
}

export const PhotoCardWithQuery = ({ id }) => (
<Query query={GET_SINGLE_PHOTO} variables={{ id }}>
        { renderProp }
    </Query >
)