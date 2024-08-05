import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  TextField,
  Autocomplete,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import lankaNic from "lanka-nic";

const top100Films = [];


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export default function DetailsCard({ handleClick }) {
  const [nic, setNic] = useState("");
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({dateOfBirth: '',gender: ''});

  const handleSubmit = () => {
    try {
      const { dateOfBirth, gender } = lankaNic.getInfoFromNIC(nic);
      const formattedDate = new Date(dateOfBirth).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      setUserInfo({ dateOfBirth: formattedDate, gender });
      setError("")
    } catch (err){
      setError("Incorrect NIC")
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Card sx={{ maxWidth: 345, position: 'relative' }}>
        <CardMedia
          sx={{ height: 200, borderRadius: 3 }}
          image="/src/assets/image2.png"
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            margin: '10px',
            padding: '3px',
            backgroundColor: 'aliceblue',
            borderRadius: '50%',
            color: '#000000',
          }}
          onClick={handleClick}
        >
          <CloseIcon />
        </IconButton>
        <CardContent>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter NIC Number"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  sx: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      color: "green",
                    },
                  },
                }}
                error={!!error}
                helperText={error}
              />
            )}
          />

          <Box
            sx={{
              marginTop: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 3,
            }}
          >
            <ColorButton variant="contained" onClick={handleSubmit}>
              <Typography
                sx={{
                  color: 'white',
                  textTransform: 'uppercase',
                  fontFamily: 'Kanit',
                  fontWeight: 500,
                }}
              >
                Submit
              </Typography>
            </ColorButton>
          </Box>

          {userInfo.gender && (
            <Box sx={{ marginBottom: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'rgba(194, 224, 194, 0.555)',
                  padding: 1,
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5">NIC No:</Typography>
                <Typography variant="h3" color="primary">
                  {nic}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'rgba(194, 224, 194, 0.555)',
                  padding: 1,
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5">D.O.B:</Typography>
                <Typography variant="h3" color="primary">
                  { userInfo.dateOfBirth}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'rgba(194, 224, 194, 0.555)',
                  padding: 1,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5">Gender:</Typography>
                <Typography variant="h3" color="primary">
                  { userInfo.gender }
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}