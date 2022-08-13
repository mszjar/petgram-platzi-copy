import React from "react";
import { PhotoCard } from '../PhotoCard'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../../hoc/get_photos';
import { Spinner } from "../../styles/animation";


export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId: categoryId } })
    if (loading) return <Spinner />
    if (error) return <h2>Error!</h2>
    return (
      <ul>
        {data.photos.map(photo => <PhotoCard PhotoCard key={photo.id} {...photo} />)}
      </ul>
    )
  }
