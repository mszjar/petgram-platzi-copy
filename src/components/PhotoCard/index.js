import React, {Fragment, useEffect, useRef, useState} from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from 'react-router-dom';


const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";


export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()
    
    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper> 
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    toggleLike({ variables: {
                                        input: { id }
                                    }})
                                }
                                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                            }
                        }
                    </ToggleLikeMutation>
                </Fragment>
            }
        </Article>
    )
}