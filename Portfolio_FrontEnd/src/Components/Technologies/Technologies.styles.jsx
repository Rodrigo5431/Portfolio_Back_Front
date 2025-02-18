import { styled } from 'styled-components';

export const Container = styled.section`
display: flex;
margin-top: 200px;
width: 99%;
justify-content: center;
gap: 50px;
align-items: center;

@media (max-width:1000px) {
    flex-direction: column;
}
`



