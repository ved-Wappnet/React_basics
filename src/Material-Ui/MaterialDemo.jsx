import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MaterialDemo = () => {
  return (
    <>
      <Button variant="text">Click</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="primary" href="http://localhost:5173/" target="_blank">
        Link
      </Button>
      <Button disabled>Disabled</Button>

      <h1>Button With Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
};

export default MaterialDemo;
