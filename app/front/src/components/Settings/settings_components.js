import styled from "@emotion/styled";

 export const Container = styled.div`
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: fixed;
 overflow: auto;
 width: 500px;
 max-width: 100%;
 min-height: 220px;
 `;

 export const ItemContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 100%;
 z-index: 2;
 `;
 