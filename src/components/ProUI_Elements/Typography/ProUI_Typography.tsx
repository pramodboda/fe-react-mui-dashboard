import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProUI_Typography() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography gutterBottom sx={{ fontSize: "6.25rem", fontWeight: 700 }}>
        Jumbo Heading with 6.25rem (100px)
      </Typography>
      <Typography variant="h1" gutterBottom>
        h1. Heading with 3rem (48px)
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading with 2.25rem (36px)
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading with 1.75rem (28px)
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading with 1.5rem (24px)
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading with 1.25rem (20px)
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading with 1rem (16px)
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1 with "0.875rem" (14px). Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2 with "0.75rem" (12px). Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1 with "1rem" (16px). Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
        rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2 "0.875rem" (14px). Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
        rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" gutterBottom sx={{ display: "block" }}>
        button text with "0.875rem" (14px)
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
        caption text with "0.75rem" (12px)
      </Typography>
      <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
        overline text with "0.625rem", (10px)
      </Typography>
    </Box>
  );
}
