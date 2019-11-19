import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Circle = styled.div`
    &:hover{
        background: radial-gradient(circle, white, #cecece);
    }
    background: #FFFFFF;
    width: 5rem;
    height: 5rem; 
    border-radius: 10rem;  
    border: 0.3rem solid #001514;
    line-height: 5rem;
    text-align: center;
    font-weight: 500;
    font-family: 'Righteous';
`;

export const HeaderTop = styled.header`
    background-color: #990000;
    padding: 1rem;
    padding-top: 2rem;
    font-size: 300%;
    font-family: 'Righteous';
    font-weight: 500;
    color: white;
    text-align: center;
`;

export const HeaderDiv = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0) 50%, #990000 50%);
`;

export const HalfHeader = styled.header`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 50%;
`;

export const Red = styled.header`
    background-color: #990000;
    width: 100%;
    height: 50%;
`;

export const White = styled.header`
    width: 100%;
    height: 50%;
`;

export const BlackSplitter = styled.div`
    height: 0.3rem;
    // margin: auto;
    background-color: black;
    width: 100%;
`;

export const BackgroundStyle = createGlobalStyle`
  body {
    background-image: radial-gradient(#e1e1e1 5%, transparent 5%),
      radial-gradient(white 5%, transparent 5%);
  background-color: white;
  background-position: 0 0, 0.2rem 0.2rem;
  background-size: 1.5rem 1.5rem;
}
`

export const BackgroundStyleRed = createGlobalStyle`
  body {
    background-image: radial-gradient(#990000 5%, transparent 5%),
      radial-gradient(#dd2323 5%, transparent 5%);
  background-color: #990000;
  background-position: 0 0, 0.2rem 0.2rem;
  background-size: 1.5rem 1.5rem;
}
`

export const FormDiv = styled.form`
    &:hover{
        background-color: white;
        transition-duration: 20ms;
    }
    position: absolute;
    background-color: #ececec;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
    font-size: 1.5vw;
    height: 60vh;
    width: 20vw;
    border-radius: 1rem;
    border-color: #cecece;
    border-style: solid;
    border-width: 0.2vw;
    border-left: 0;
    border-top: 0;
`;

export const SubmitForm = styled.form`
    &:hover{
        background: linear-gradient(0deg, rgba(0,0,0,0) 50%, #cecece 50%);
        border-radius: 100%; 
    }
    width: 20%;
`;

export const PokemonCard = styled.div`
    height: 8rem;
    width: 10rem;
    margin: 1rem;
    border-radius: 4%;
    border-color: #e1e1e1;
    border-style: solid;
    border-width: 0.2rem;
    border-left: 0.2rem; 
    border-top: 0.2rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const PokemonList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-items: space-around;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export const Center = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PokemonText = styled.div`
    background: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 0.2rem;
    width: 9.6rem;
    text-align: center;
`;