import {keyframes, css} from 'styled-components';


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
