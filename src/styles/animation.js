import {keyframes, css} from 'styled-components';
import styled from "styled-components";



const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({ time = '0.2s', type = 'ease'} = {}) => 
    css`animation: ${time} ${fadeInKeyframes} ${type};`


export const Spinner = styled.div`
    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }

        100% {
        transform: rotate(360deg);
        }
        
    }
        
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;
    margin:auto;
    animation: spin 1s ease infinite;
`