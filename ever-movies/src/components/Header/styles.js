import styled from "styled-components";

export const Containerh = styled.div`
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;

img {
    width: 20%;
    height: 10%;
    border: 3px solid lightseagreen;
}

h1 {
    margin-right: 900px;
    margin-top: 100px;
    margin-left: 0px;
}
`
export const Cont = styled.div`
margin-bottom: 400rem;
padding: 30px 40px;
position: absolute;
margin-top: 10px;

`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 20px;
padding: 10px 20px;
margin-bottom: 400rem;
margin-left: 1500px;
position: relative;
`
export const Li = styled.li`
color: #ffffff;
margin-right: 0;
padding: 0 0 10px;
font-weight: 700;
font-size: 32px;
position: relative;
a{
    color: #ffffff;
    background-color: darkcyan;
    border: 3px solid #ffffff;
    border-radius: 5px;
}

& :hover {
    background-color: cadetblue;
    color: #000;
    font-weight: 980;
}

&::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isactive ? "100%" : 0 )};
    background-color:#189b20;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: width 0.5s ease-in-out;
}

&:hover::after {
    width: 100%;
}
`

