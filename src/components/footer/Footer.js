import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <GitHub>
            <a href="https://github.com/getgaurav/yoursocial">@getgaurav | GitHub</a>
        </GitHub>
    )
};



const GitHub = styled.div`
    width:160px;
    position:relative;
    left:50%;
    bottom:40px;
    transform:translateX(-50%);
    a{color:#ababbb;transition:all 0.3s;}
    a:hover{color:#1877f2;}
`;
