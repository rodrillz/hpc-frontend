import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <div className= "justify-center items-center flex my-16">
      
      <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/hpc.png"
          alt="NoticiaHPC"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Towards a greater HPC capacity in Latin America
          </Typography>
          <Typography variant="body2" color="text.secondary">
          High-Performance Computing (HPC) has proven to be a strong driver for science and technology development,
           and is increasingly considered indispensable for most scientific disciplines. HPC is making a difference
            in key topics of great interest such as climate change, personalised medicine, engineering, astronomy, 
            education, economics, industry and public policy, becoming a pillar for the development of any country, 
            and to which the great powers are giving strategic importance and investing billions of dollars, in competition without limits where data is the new gold.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
   
      </div>
  );
}