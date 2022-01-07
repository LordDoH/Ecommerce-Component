import React from 'react';
// Import styled-components
import styled from 'styled-components';
// Import images
import Check from '../../assets/images/check.svg';

const Button = styled.button`
  background-color: #6b00f5;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 130px;
  align-items: center;
  height: 35px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  bottom: -25px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const Button2 = styled.button`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 130px;
  align-items: center;
  height: 35px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  bottom: -25px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const Checked = styled.img`
  padding-right: 5px;
`;

const DataContainer = styled.div`
  width: 135px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  left: -50px;
`;

const Image = styled.img`
  width: 150px;
  position: relative;
  top: -20px;
  left: -30px;
`;

const Price = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const Product = styled.span`
  font-size: 18px;
`;

const ProductContainer = styled.div`
  width: 350px;
  background: ${(props) => props.color};
  border-radius: 20px 0 0 20px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  margin-left: auto;
  align-items: center;
`;

function ProductCard({
  name = '',
  image = '',
  price = 0,
  state = 0,
  onClick1 = '',
  onClick2 = '',
}) {
  const gRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}30`;
    // eslint-disable-next-line
    console.log(randomColor);
    return randomColor;
  };

  return (
    <ProductContainer color={gRandomColor}>
      <Image src={image} alt="Product Image" />
      <DataContainer>
        <Product>{name}</Product>
        <Price>${price}</Price>
        {state === 0 ? (
          <Button onClick={onClick1}>Add to Cart</Button>
        ) : (
          <Button2 onClick={onClick2}>
            <Checked src={Check} alt="In Cart" />
            In Cart
          </Button2>
        )}
      </DataContainer>
    </ProductContainer>
  );
}

export default ProductCard;
