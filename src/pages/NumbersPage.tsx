// formatting and manipulating numbers

import numeral from "numeral";

// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {Typography} from "@mui/material";


const NumbersPage: React.FC = () => {
    const codeString = `
    const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
    console.log(formatter.format(1000)); // "$1,000.00"
    `;
    return <>
    <Typography>
  
    {numeral(1000).format("0,0")} {/* "1,000" */}
    </Typography>
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
    </>
}

export default NumbersPage;