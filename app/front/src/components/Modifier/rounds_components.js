import styled from "@emotion/styled";
import colors from '../../assets/theme/base/colors';

const { white, text, error, primary, success, dark, secondary, transparent } = colors;

 export const Container = styled.div`
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: fixed;
 overflow: auto;
 width: 678px;
 max-width: 100%;
 min-height: 400px;
 height: 550px;
 `;

 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 100%;
 z-index: 2;
 `;
 
 export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;
 
 export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 font: 
 `;
 
 export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 7px 15px;
 margin: 8px 0;
 width: 100%;
 border-radius: 10px;
 `;
 

 export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #0066ff;
    background-color: ${success.main};
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
