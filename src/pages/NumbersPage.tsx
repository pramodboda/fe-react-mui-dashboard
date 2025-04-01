// formatting and manipulating numbers

import numeral from "numeral";

import SyntaxHighlighter from "react-syntax-highlighter";
// import virtualizedRenderer from "react-syntax-highlighter-virtualized-renderer";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Typography } from "@mui/material";

const itemPrices = [
  {
    price: 1490,
  },
  {
    price: 2990,
  },
];

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
});

const sumPrice = itemPrices[0].price + itemPrices[1].price;

const NumbersPage: React.FC = () => {
  const codeString = `
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
  console.log(formatter.format(1000)); // "₹1,000.00"
  {formatter.format(1000)} // "₹1,000.00"
    `;
  return (
    <>
      <Typography>
        {formatter.format(itemPrices[0].price)}
        {formatter.format(itemPrices[1].price)}
        Total: {formatter.format(sumPrice)}
        {/* '$1,000.00' */}
      </Typography>
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        // renderer={virtualizedRenderer()}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

export default NumbersPage;
