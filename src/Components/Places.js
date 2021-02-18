import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function Places(props) {
  const {
    location: {
      state: { data },
    },
  } = props;

  return (
    <>
      <Link to="/">Back to home</Link>
      <br />

      <Grid container spacing={2} id="places_grid">
        <Grid item xs={4} sm={4}>
          <img id="img-logo" src={data.logo_url} alt="business logo" />
        </Grid>
        <Grid item xs={5} sm={5} id="places_details">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <div className="name">
              <b>Name:</b>
              {data.name}
            </div>

            <div className="name">
              <b>Address:</b>
              {data.address}
            </div>

            <div className="name">
              <b>Website:</b>
              {data.website_url}
            </div>

            <div className="name">
              <b>Hours:</b>
              {
                <div>
                  {Object.entries(data.hours).map(([keys, value]) => {
                    return (
                      <div id="hrsList" key={keys}>
                        {keys} : {value}
                      </div>
                    );
                  })}
                </div>
              }
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Places;
