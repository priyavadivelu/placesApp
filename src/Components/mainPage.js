import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostItem from "./PostItem.js";
import Typography from "@material-ui/core/Typography";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      posts: [],
    };
    this.postsLoadPromise = Promise.resolve();
  }

  componentDidMount() {
    this.postsLoadPromise = this.loadPosts();
  }

  loadPosts() {
    fetch("https://6025865136244d001797c552.mockapi.io/api/v1/places")
      .then((response) => {
        if (response.status !== 200) {
          console.log("Problem status is" + response.status);
        }

        response.json().then((data) => {
          let posts = data.map((post) => {
            return {
              businessId: post.id,
              businessName: post.name,
              website: post.website_url,
              address: post.address,
            };
          });

          this.setState({ isDataLoading: false, posts });
        });
      })
      .catch((e) => {
        console.log("Error in API Fetch Data");
      });
  }

  render() {
    const posts = () => {
      if (this.state.isDataLoading) {
        return (
          <Grid item>
            <CircularProgress />
          </Grid>
        );
      } else {
        return (
          this.state.posts && (
            // <div className="posts-div" style={{ width: "100%", maxWidth: 900 }}>
            //   {this.state.posts.map((post) => (
            //     <PostItem key={`post_${post.id}`} post={post} />
            //   ))}
            // </div>
            <div style={{ width: "100%", maxWidth: 1000 }}>
              <PostItem post={this.state.posts} />
            </div>
          )
        );
      }
    };

    return (
      <Grid
        container
        spacing={24}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {posts()}
      </Grid>
    );
  }
}

export default MainPage;
