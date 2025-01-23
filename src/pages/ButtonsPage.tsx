import Button from "@mui/material/Button";
import ProUI_BrowserFullscreen from "../components/ProUI_Elements/ProUI_BrowserFullscreen/ProUI_BrowserFullscreen";

const ButtonsPage: React.FC = () => {
  return (
    <>
      <ProUI_BrowserFullscreen />

      <hr />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <hr />
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <hr />
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </>
  );
};

export default ButtonsPage;
