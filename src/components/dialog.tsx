import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconCheckboxes from "./like";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dialog-container">
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Maktubni ochish
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Ruxshona Sizga Tabrigim shuki:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ota-onangiz baxtiga doim sog'-omon bo'ling!!! O'zingiz o'ylagan
              barcha ezgu niyyatlaringizga yeting. Orzu qilgan Talabalikka
              Inshaaloh erishing. ILM olishdan charchamang. Doim ko'rishganda
              xushmuomila, oddiy va tabassum qilib turadigan inson bo'lib
              qoling. Sizga barcha yaxshiliklarni tilab qoluvchi Sinfdoshingiz            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Yopish
            </Button>
            <IconCheckboxes />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
