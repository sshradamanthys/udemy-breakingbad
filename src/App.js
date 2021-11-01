import { useState, useEffect } from "react";
import Display from "./components/Display";
import logo from "./logo.svg";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  background: linear-gradient(to top left, #007d35, #0f574e, #00ff00);
  border: 2px solid rgba(0, 0, 0, 0.25);
  color: whitesmoke;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;

  :hover {
    cursor: pointer;
    background: linear-gradient(to bottom right, #007d35, #0f574e, #000);
  }
`;

const Img = styled.img`
  width: 25%;
  opacity: 0.7;
`;

function App() {
  const [quote, setQuote] = useState({});

  const fetchAPI = async () => {
    const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
    const arr = await res.json();
    const obj = arr[0];
    setQuote(obj);
  };

  useEffect(() => fetchAPI(), []);

  return (
    <Container>
      <Img src={logo} alt="logo" />
      <Display quote={quote} />
      <Button onClick={fetchAPI}>Quote</Button>
    </Container>
  );
}

export default App;
