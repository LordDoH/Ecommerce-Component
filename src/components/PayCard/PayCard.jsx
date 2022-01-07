import React from 'react';
// Import styled-components
import styled from 'styled-components';
// Import images
import Chevron from '../../assets/images/chevron.svg';

const ButtonR = styled.button`
  background-color: #6b00f5;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 32px;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const ButtonL = styled.button`
  background-color: #6b00f5;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 32px;
  align-items: center;
  height: 32px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

const Count = styled.span`
  position: relative;
  margin: auto;
  color: #fff;
  width: 32px;
  height: 32px;
  background-color: #000;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const CounterContainer = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  margin: 0px 0;
`;

const DataContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

const ImageContainer = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  position: relative;
`;

const Image = styled.img`
  width: 65px;
  position: absolute;
  filter: drop-shadow(0px 5.02591px 5.02591px rgba(0, 0, 0, 0.25));
`;

const Number = styled.span`
  font-weight: 700;
  font-size: 16px;
  width: 30px;
  text-align: center;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Pricing = styled.span`
  font-size: 32px;
  font-weight: 700;
  text-align: end;
  width: 140px;
`;

const Product = styled.span`
  font-size: 18px;
`;

const ProductContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  margin: 5px auto;
  align-items: start;
`;

const SymbolP = styled.img`
  transform: rotate(180deg);
`;

const SymbolL = styled.img``;

function PayCard({
  name = '',
  image = '',
  price = 0,
  state = 0,
  onClick1 = '',
  onClick2 = '',
}) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={image} alt="Product Image" />
        <Count>{state}</Count>
      </ImageContainer>
      <DataContainer>
        <Product>{name}</Product>
        <Price>${price}</Price>
        <CounterContainer>
          <ButtonL onClick={onClick1}>
            <SymbolL src={Chevron} alt="Less" />
          </ButtonL>
          <Number>{state}</Number>
          <ButtonR onClick={onClick2}>
            <SymbolP src={Chevron} alt="Plus" />
          </ButtonR>
          <Pricing>${(price * state).toFixed(2)}</Pricing>
        </CounterContainer>
      </DataContainer>
    </ProductContainer>
  );
}

export default PayCard;
