import styled from "styled-components";

 
 export const Container = styled.div`
 display: flex;
 margin-top: 30px;
 gap: 10px;
 img {
    height: 200px;
}

div {
    display: flex;
    flex-direction: column;
}

p {
    color: #ffffff;
}

 span {
    padding: 10px 16px;
    border: 2px solid #ffffff;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: #0f0f0f;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 `
 export const Title = styled.h4`
 color: #ffffff;
font-weight: 800;
font-size: 28px;
 `