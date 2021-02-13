import React from "react";
import "../App.css";
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
      <div className="places-container">
        <section id="logo_img">
          <img src={data.logo} alt="business logo" />
        </section>
        Name: {data.businessName}
        <br></br>
        Address:{data.address}
        <br></br>
        Website: {data.website}
        <br></br>
        Hours: {data.hours}
        <br></br>
      </div>
    </>
  );
}

export default Places;
