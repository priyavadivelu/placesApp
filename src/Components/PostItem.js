import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import { Link, Router } from "react-router-dom";

export default class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.post);
    const busi = this.props.post;
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <h3>PLACES</h3>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Business ID</TableCell>
                <TableCell align="left">Business Name</TableCell>
                <TableCell align="left">Website</TableCell>
                <TableCell align="left">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {busi.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.businessId}</TableCell>
                  <TableCell align="left">
                    <Link
                      to={{
                        pathname: `/places/${row.businessId}`,
                        state: { data: row },
                      }}
                    >
                      {row.businessName}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.website}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}
