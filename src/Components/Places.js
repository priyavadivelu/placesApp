import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Link, Router } from "react-router-dom";
import { useEffect } from "react";

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
  const {
    location: {
      state: { data },
    },
  } = props;

  useEffect(() => {
    console.log({ data });
  }, []);

  return (
    <>
      <Link to="/">Back to home</Link>
      <br />

      <Grid container spacing={2} id="places_grid">
        <Grid item xs={4} sm={4}>
          <img id="img-logo" src={data.logo} alt="business logo" />
        </Grid>
        <Grid item xs={4} sm={4} id="places_details">
          <div className="name">
            <b>Name:</b>
            {data.businessName}
          </div>
          <br></br>

          <div className="name">
            <b>Address:</b>
            {data.address}
          </div>
          <br></br>

          <div className="name">
            <b>Website:</b>
            {data.website}
          </div>
          <br></br>

          <div>
            {" "}
            <br></br>
          </div>

          <div className="name">
            <b>Hours:</b>
            {Object.entries(data.hours)}
            <br></br>
          </div>
          <br></br>
        </Grid>
      </Grid>
    </>
  );
}

export default Places;
