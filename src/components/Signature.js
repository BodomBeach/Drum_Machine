import React from 'react'
import styled from 'styled-components';

const StyledSignature = styled.div`
    font-family: Audiowide;
    color: rgb(228, 217, 219);
    text-align: center;
    padding-top: 10px;
    > h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 35px
    }
    > h3 {
        margin-top: 5px;
        font-size: 22px;
    }
`

const Signature = () => (
            <StyledSignature>
                <h2>Drum Machine</h2>
                <h3>By BodomBeach</h3>
            </StyledSignature>
        )


export default Signature;
