import React from "react";
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent } from "@mui/material";

export default function ClickCard({ handleClick }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',width: '100vw' }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h3" sx={{ textTransform: 'uppercase', fontFamily: 'Kanit', fontWeight: 500, color: 'green', lineHeight: 1 }}>
          Check NIC Details
        </Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontFamily: 'Kanit', fontWeight: 500, color: 'black', mt: 1 }}>
          Click on the card
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 345, position: 'relative' }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="250"
            image="/src/assets/image1.png"
            alt="NIC"
            sx={{ borderRadius: 1 }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(6, 156, 31, 0.726)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 24,
              cursor: 'pointer',
              opacity: 0,
              borderRadius: 1,
              transition: 'opacity 0.3s',
              textTransform: 'uppercase',
              fontFamily: 'Kanit',
              fontWeight: 500,
            }}
            className="overlay"
          >
            Click
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}