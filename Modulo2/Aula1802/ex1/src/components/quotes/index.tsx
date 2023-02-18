import React, { useEffect, useState } from "react";

type Quotes = {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
};

type Query = Quotes[];

type Props = {
  content: string;
};

const GenerateQuote: React.FC = () => {
  const [frases, setFrases] = useState<Quotes["content"]>();
  const [click, setClick] = useState(1);

  const clicking = () => setClick(click + 1);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch("https://api.quotable.io/random");
      const quote: Quotes = await apiResponse.json();
      setFrases(quote.content);
    };
    fetchData();
  }, [click]);

  return (
    <div>
      <p>{frases}</p>
      <button onClick={() => clicking()}>Lero Lero Generator</button>
    </div>
  );
};

export default GenerateQuote;
