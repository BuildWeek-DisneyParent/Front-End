
import styled from 'styled-components';

export const NavigationStyle = styled.header `
display: flex;
justify-content: space-between;
margin: 1% 5%;

.heading{
    display: flex;
   
}
img {
    width: 200px;
}

nav {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 1.6rem;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        :hover {
            border-bottom: 5px solid #00BD9D;
        }
    }
}
}
`;
