import styled from 'styled-components';

export const BottomStyle = styled.footer `
    display: flex;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        padding: 2%;
        width: 15%;
        display: flex;
        justify-content: space-around;        
    }



    nav { 
        width: 20%;
        font-size: 1.8rem;
        display: flex;
        flex-direction: column;        
        align-items: center;

        a {
            text-decoration: none;
            color: black;
            padding: 1%;
            padding-bottom: 3%;          
        }
    }
    p{
        font-size: 1.8rem;
        padding: 2%;
    }
}
`