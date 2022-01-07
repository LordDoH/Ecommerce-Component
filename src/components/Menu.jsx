import React, { useState } from 'react';
// Import styled-components
import styled from 'styled-components';
// Import images
import Bacon from '../assets/images/plate__bacon-eggs.png';
import ChickenSalad from '../assets/images/plate__chicken-salad.png';
import FishSticks from '../assets/images/plate__fish-sticks-fries.png';
import FrenchFries from '../assets/images/plate__french-fries.png';
import Ravioli from '../assets/images/plate__ravioli.png';
import Salmon from '../assets/images/plate__salmon-vegetables.png';
import Spaghetti from '../assets/images/plate__spaghetti-meat-sauce.png';
import Tortellini from '../assets/images/plate__tortellini.png';
import BgBR from '../assets/images/bg__btm-right.svg';
import BgTR from '../assets/images/bg__top-right.svg';
import BgL from '../assets/images/bg__left.svg';
// Import components
import ProductCard from './ProductCard/ProductCard';
import PayCard from './PayCard/PayCard';

const Background = styled.div``;

const BackgroundBR = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 400px;
`;

const BackgroundTR = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
`;

const BackgroundL = styled.img`
  position: fixed;
  left: 0;
  bottom: 90px;
  width: 200px;
`;

const Bill = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  margin: 20px auto;
`;

const CartList = styled.div`
  width: 390px;
  height: 650px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 10px;
    border: 2px solid #efefef;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #eff0f6;
    border-radius: 10px;
  }
`;

const Line = styled.div`
  height: 3px;
  background-color: #d7d7f9;
  width: 315px;
  border: none;
  margin: 0 auto;
`;

const Line2 = styled.div`
  width: 315px;
  height: 1px;
  background-color: #d7d7f9;
  border: none;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  background-color: #eff0f6;
  height: 100vh;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  width: 900px;
  margin: auto;
  position: relative;
`;

const MenuList = styled.div`
  width: 390px;
  height: 650px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 10px;
    border: 2px solid #efefef;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #eff0f6;
    border-radius: 10px;
  }
`;

const Price = styled.span`
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  text-align: end;
  width: 125px;
`;

const SubtotalC = styled.div`
  display: flex;
  align-items: end;
  padding: 10px 0;
  justify-content: end;
`;

const TaxC = styled.div`
  display: flex;
  align-items: end;
  padding: 10px 0;
  justify-content: end;
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  text-align: end;
  width: 95px;
  padding-bottom: 3px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin: 50px 0 20px 40px;
`;

const Total = styled.span`
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  text-align: end;
  width: 125px;
  color: #6b00f5;
`;

const TotalC = styled.div`
  display: flex;
  align-items: end;
  padding: 10px 0;
  justify-content: end;
`;

function Menu() {
  const [baconQ, setBaconQ] = useState(0);
  const [chickenQ, setChickenQ] = useState(0);
  const [fishQ, setFishQ] = useState(0);
  const [friesQ, setFriesQ] = useState(0);
  const [ravioliQ, setRavioliQ] = useState(0);
  const [salmonQ, setSalmonQ] = useState(0);
  const [spaghettiQ, setSpaghettiQ] = useState(0);
  const [tortelliniQ, setTortelliniQ] = useState(0);

  const addProduct = (productType) => {
    if (productType === 'Bacon and eggs') {
      const grow = baconQ + 1;
      setBaconQ(grow);
    } else if (productType === 'Chicken Salad') {
      const grow = chickenQ + 1;
      setChickenQ(grow);
    } else if (productType === 'Fish Sticks with Fries') {
      const grow = fishQ + 1;
      setFishQ(grow);
    } else if (productType === 'French Fries with Ketchup') {
      const grow = friesQ + 1;
      setFriesQ(grow);
    } else if (productType === 'Meat and Cheese Ravioli') {
      const grow = ravioliQ + 1;
      setRavioliQ(grow);
    } else if (productType === 'Salmon and Vegetables') {
      const grow = salmonQ + 1;
      setSalmonQ(grow);
    } else if (productType === 'Spaghetti with Sauce') {
      const grow = spaghettiQ + 1;
      setSpaghettiQ(grow);
    } else if (productType === 'Cheese Tortellini') {
      const grow = tortelliniQ + 1;
      setTortelliniQ(grow);
    }
  };

  const removeProduct = (productType) => {
    if (productType === 'Bacon and eggs') {
      const rem = baconQ - 1;
      setBaconQ(rem);
    } else if (productType === 'Chicken Salad') {
      const rem = chickenQ - 1;
      setChickenQ(rem);
    } else if (productType === 'Fish Sticks with Fries') {
      const rem = fishQ - 1;
      setFishQ(rem);
    } else if (productType === 'French Fries with Ketchup') {
      const rem = friesQ - 1;
      setFriesQ(rem);
    } else if (productType === 'Meat and Cheese Ravioli') {
      const rem = ravioliQ - 1;
      setRavioliQ(rem);
    } else if (productType === 'Salmon and Vegetables') {
      const rem = salmonQ - 1;
      setSalmonQ(rem);
    } else if (productType === 'Spaghetti with Sauce') {
      const rem = spaghettiQ - 1;
      setSpaghettiQ(rem);
    } else if (productType === 'Cheese Tortellini') {
      const rem = tortelliniQ - 1;
      setTortelliniQ(rem);
    }
  };

  const resProduct = (productType) => {
    if (productType === 'Bacon and eggs') {
      setBaconQ(0);
    } else if (productType === 'Chicken Salad') {
      setChickenQ(0);
    } else if (productType === 'Fish Sticks with Fries') {
      setFishQ(0);
    } else if (productType === 'French Fries with Ketchup') {
      setFriesQ(0);
    } else if (productType === 'Meat and Cheese Ravioli') {
      setRavioliQ(0);
    } else if (productType === 'Salmon and Vegetables') {
      setSalmonQ(0);
    } else if (productType === 'Spaghetti with Sauce') {
      setSpaghettiQ(0);
    } else if (productType === 'Cheese Tortellini') {
      setTortelliniQ(0);
    }
  };

  const data = [
    {
      name: 'Bacon and eggs',
      image: Bacon,
      price: 3.45,
      state: baconQ,
    },
    {
      image: ChickenSalad,
      name: 'Chicken Salad',
      price: 2.99,
      state: chickenQ,
    },
    {
      image: FishSticks,
      name: 'Fish Sticks with Fries',
      price: 4.35,
      state: fishQ,
    },
    {
      image: FrenchFries,
      name: 'French Fries with Ketchup',
      price: 2.23,
      state: friesQ,
    },
    {
      image: Ravioli,
      name: 'Meat and Cheese Ravioli',
      price: 4.27,
      state: ravioliQ,
    },
    {
      image: Salmon,
      name: 'Salmon and Vegetables',
      price: 7.82,
      state: salmonQ,
    },
    {
      image: Spaghetti,
      name: 'Spaghetti with Sauce',
      price: 5.12,
      state: spaghettiQ,
    },
    {
      image: Tortellini,
      name: 'Cheese Tortellini',
      price: 2.9,
      state: tortelliniQ,
    },
  ];

  const total = data
    .map((e) => e.state * e.price)
    .reduce((a, b) => a + b)
    .toFixed(2);
  const subtotal = (total / 1.0975).toFixed(2);
  const tax = (subtotal * 0.0975).toFixed(2);

  // eslint-disable-next-line
  console.log(data);

  return (
    <MainContainer>
      <Background>
        <BackgroundBR src={BgBR} alt="Image Bottom Right" />
        <BackgroundTR src={BgTR} alt="Image Top Right" />
        <BackgroundL src={BgL} alt="Image Left" />
      </Background>
      <MenuContainer>
        <MenuList>
          <Title>To Go Menu</Title>
          {data.map((item) => (
            <ProductCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
              state={item.state}
              onClick1={() => addProduct(item.name)}
              onClick2={() => resProduct(item.name)}
            />
          ))}
        </MenuList>
        <CartList>
          <Title>Your Cart</Title>
          {data.map((item) =>
            item.state > 0 ? (
              <div>
                <Line2 />
                <PayCard
                  key={item.image}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  state={item.state}
                  onClick1={() => removeProduct(item.name)}
                  onClick2={() => addProduct(item.name)}
                />
              </div>
            ) : null
          )}
          <Line />
          <Bill>
            <SubtotalC>
              <Text>Subtotal: </Text>
              <Price>${subtotal}</Price>
            </SubtotalC>
            <TaxC>
              <Text>Tax: </Text>
              <Price>${tax}</Price>
            </TaxC>
            <TotalC>
              <Text>Total: </Text>
              <Total>${total}</Total>
            </TotalC>
          </Bill>
        </CartList>
      </MenuContainer>
    </MainContainer>
  );
}

export default Menu;
