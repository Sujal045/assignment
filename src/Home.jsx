import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import "./styles/home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);
  const [dialogClosed, setDialogClosed] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogClosed(true);
  };

  const handleImageChange = (imageNumber) => {
    setSelectedImage(imageNumber);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <div className="container">
      <Button
        className="btn"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Click Here
      </Button>
      <Dialog
        className="dialog"
        open={open}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
      >
        <DialogTitle>Select an Image</DialogTitle>
        <DialogContent>
          <img
            src={
              selectedImage === 1
                ? "https://media.istockphoto.com/id/1416797815/photo/golden-number-one.jpg?b=1&s=170667a&w=0&k=20&c=tjfGTCWdGazQUfPBMSR3YIjY9cthMq-f7Y1LwfcXyFM="
                : selectedImage === 2
                ? "https://images.unsplash.com/photo-1621440318431-b720cd358375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnVtYmVyJTIwMnxlbnwwfHwwfHw%3D&w=1000&q=80"
                : "https://media.istockphoto.com/id/1349473444/photo/digital-number-3-over-blue-technological-background.jpg?b=1&s=170667a&w=0&k=20&c=BKEOWc8FDOY9howl6_xC3d4WrDK_QMd1zf91TGkGleI="
            }
            alt="Image not available"
          />
        </DialogContent>
        <DialogActions>
          <h4>Press "ESC" to close the dialog box</h4>
          <Button onClick={() => handleImageChange(1)} color="primary">
            Image 1
          </Button>
          <Button onClick={() => handleImageChange(2)} color="primary">
            Image 2
          </Button>
          <Button onClick={() => handleImageChange(3)} color="primary">
            Image 3
          </Button>
          <Button className="close" onClick={handleClose} color="primary">
            <h4>Close</h4>
          </Button>
        </DialogActions>
      </Dialog>
      {dialogClosed && <h1 className="welcome">Welcome!</h1>}
    </div>
  );
};

export default Home;
