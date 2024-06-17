import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField
} from '@mui/material';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const VerificationSuccessDialog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // const { verify } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: '',
    body: '',
    button: '',
    resendVerification: '',
  });


  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/login');
  };

  return (
    <>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent>
          <Typography>{dialogContent.body}</Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              {dialogContent.button}
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
