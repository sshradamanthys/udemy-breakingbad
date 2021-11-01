import styled from "@emotion/styled";

const Div = styled.div`
  background-color: whitesmoke;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;

  h1 {
    margin-top: 0;
    margin-left: 1rem;
    position: relative;
    &::before {
      content: open-quote;
      font-size: 3rem;
      color: black;
      position: absolute;
      left: -2rem;
      top: -1rem;
    }
  }

  p {
    color: rgba(0, 0, 0, 0.8);
    text-align: right;
  }
`;

const Display = ({ quote }) => {
  return (
    <Div>
      <h1>{quote.quote} </h1>
      <p>- {quote.author} </p>
    </Div>
  );
};

export default Display;
