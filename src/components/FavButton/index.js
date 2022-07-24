import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick}) => {
    const Icon = liked ? FcLike : FcLikePlaceholder

    return <Button onClick={onClick}>
        <Icon size='32px' /> {likes} likes!
    </Button>
}