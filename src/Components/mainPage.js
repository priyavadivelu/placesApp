import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostItem from "./PostItem.js";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      businesses: [],
    };
  }

  componentDidMount() {
    fetch("https://6025865136244d001797c552.mockapi.io/api/v1/places")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ businesses: result, isDataLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isDataLoading: false });
      });
  }

  render() {
    const busiItems = () => {
      if (this.state.isDataLoading) {
        return (
          <Grid item>
            <CircularProgress />
          </Grid>
        );
      } else {
        return (
          this.state.businesses && (
            <div style={{ width: "100%", maxWidth: 1000 }}>
              <PostItem busi={this.state.businesses} />
            </div>
          )
        );
      }
    };

    return (
      <Grid container direction="column" alignItems="center" justify="center">
        {busiItems()}
      </Grid>
    );
  }
}

export default MainPage;
