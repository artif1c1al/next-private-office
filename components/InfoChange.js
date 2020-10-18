import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function InfoChange() {
  return (
    <div className="infoChange">
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Button variant="contained" color="primary">
        Сохранить изменения
      </Button>
    </div>
  );
}
