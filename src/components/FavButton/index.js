import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { Button } from "./styles";
import PropTypes from 'prop-types';

export const FavButton = ({ liked, likes, onClick}) => {
    const Icon = liked ? FcLike : FcLikePlaceholder

    return <Button onClick={onClick}>
        <Icon size='32px' /> {likes} likes!
    </Button>
}

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}