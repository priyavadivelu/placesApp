import React from "react";
import "../App.css";
import { Link, Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function Places(props) {
  //   const displayPhotos = () => {
  //     return props.post.map((items) => {
  //       return (
  //         <section>
  //           <img id="logo_img" src={items.logo} alt="business logo" />
  //         </section>
  //       );
  //     });
  //   };
  //   return (
  //     <Grid
  //       container
  //       spacing={24}
  //       direction="column"
  //       alignItems="center"
  //       justify="center"
  //     >
  //       {displayPhotos()}
  //     </Grid>
  //   );
  return (
    <div>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Places;
