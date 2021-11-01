const Display = ({ quote }) => {
  return (
    <div>
      <p>Quote: {quote.quote}</p>
      <p>Author: {quote.author}</p>
    </div>
  );
};

export default Display;
