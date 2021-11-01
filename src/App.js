import { useState } from "react";
import Display from "./components/Display";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );

  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, setQuote] = useState({});

  const handleClick = async () => {
    const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
    const arr = await res.json();
    const first = arr[0];
    setQuote(first);
  };

  return (
    <Container>
      <Display quote={quote} />
      <Button onClick={handleClick}>Obtener frase</Button>
    </Container>
  );
}

export default App;
