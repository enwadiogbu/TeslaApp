import React from 'react'

function Section(props) {
    return (
        <Container bgImage={""}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftBotton>{props.leftBtnText}</LeftBotton>
                <RightButton>{props.rightBtnText}</RightButton>

            </ButtonGroup>
            
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
    background-image: ${props => `url(/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-diretion: column;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;

`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 50px;
`