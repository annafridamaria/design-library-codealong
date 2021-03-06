import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 6px;
background: #fff;
padding: 20px;
margin-bottom: 20px;
`
const CoverImage = styled.image`
`

const Title = styled.h1`
margin: 0px;
font-size: 30px;
`
const SecondaryText = styled.p`
margin: 0px;
font-size: 20px;
color: #464646;
`
const Thumbnail = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%
    background-image: url(${(props) => props.url});
    background-size: cover;
    margin-right: 10px;
`

const TitleBar = styled.div`
    display: flex;
    align-items: center;
`

export const Card = ({title, secondaryText, thumbnailUrl, coverImage }) => {
    return (
        <Container>
            {CoverImage && <CoverImage src={coverImage}/>}
            <TitleBar>
                {thumbnailUrl && <Thumbnail url="thumbnailUrl"/>}
                <div>
                    {title && <Title>{title}</Title>}
                    {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
                </div>
            </TitleBar>
        </Container>
 
    )
   
}