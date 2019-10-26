import styled from 'styled-components'

export const HeaderDiv = styled.header`
    /* text-align: center; */
    overflow: hidden;
    background-color: #F24236;
    /* padding: 1rem; */
    display: flex;
    flex-direction: row; 
    justify-content: center;  
    color: #FFFFFF;
    font-size: 300%;
    font-family: 'Righteous', cursive;
    padding-top: 3rem;
`;

export const BlackSplitter = styled.div`
    background-color: #001514; 
    width: 50%;
    margin-top: auto;
    height: 1rem;
`;

export const WhiteSpace = styled.div`
    background-color: #001514; 
    width: 0.5%;
    margin-top: auto;
    height: 1rem;   
`;


export const NavbarItem = styled.nav`
    &:hover{
        background-color: #C7372D;
    }
    color: #FFFFFF;
    text-align: center;
    font-family: 'Hind Siliguri', sans-serif; 
    /* padding: 0.3rem; */
    /* background-color: #001514; */
`;

export const SemiCircle = styled.div`
    background: #FFFFFF;
    width: 6rem;
    height: 3rem; 
    border-top-left-radius: 7rem;  
    border-top-right-radius: 7rem; 
    border: 1rem solid #001514;
    border-bottom: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 0 auto; */
`;