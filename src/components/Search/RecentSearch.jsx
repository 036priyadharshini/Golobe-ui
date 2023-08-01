import { CardContent, CardMedia, Typography, Grid, Box } from '@mui/material'
import React from 'react'

import { useState, useEffect } from 'react'
const RecentSearch = () => {



  const imgdata = [


    {
      id: 1,
      imageUrl: "https://wallpapershome.com/images/pages/ico_h/6498.jpg",
      title: 'Istanbul,Turkey',
      price: '$200',
      description: "255 places"
    },
    {
      id: 2,
      imageUrl: "https://images7.alphacoders.com/362/362619.jpg",
      title: "Sydney,Austria",
      price: "$250",
      description: "300 places"
    },
    {
      id: 3,
      imageUrl: "https://images8.alphacoders.com/541/541025.jpg",

      title: "Male,Maldives",
      price: "$250",
      description: "120 places"
    },
    {
      id: 4,
      imageUrl: "https://images5.alphacoders.com/437/437294.jpg",
      title: "Texas,America",
      price: "$250",
      description: "100 places"
    }
  ]



  //   const[imgdata,setData]=useState([]);

  //   const fetchData = async () =>{
  //     try{
  //     const url="http://localhost:3100/items";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setData(data);
  //    }
  //    catch(error){
  //       console.log("Error:",error);
  //    }
  //   };



  //   useEffect (() => {
  //   fetchData();
  // },[] )


  return (

    <Grid container sx={{ height: '22vh', width: '75vw',marginTop:3}}>
      <Box sx={{ display: "flex", flexDirection: 'column' }}>

        <Typography variant="h4n" component="h6" marginLeft={1} >
          Your Recent Searches
        </Typography>


        <Grid container spacing={1} direction="row" sx={{ marginTop: 2, width: '75vw', height: '20vh' }}>
          {imgdata.map((image) => (
            <Grid item key={image.id} xs={3} sx={{ width: '25%'}}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" ,marginLeft:1}}>
                <Box
                  sx={{
                    width: 90,
                    height: 90,

                    borderRadius: 4,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img src={image.imageUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={image.title} />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" height="100%" sx={{ marginLeft: 2, overflow: 'hidden', wordWrap: 'break-word' }}>
                  <Typography variant="body3" >{image.title}</Typography>
                  <Typography variant="caption">{image.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>


  );
}
export default RecentSearch
