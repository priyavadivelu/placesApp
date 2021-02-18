import React, { Component } from "react";
import { Grid } from "@material-ui/core/";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "../App.css";
import { Link } from "react-router-dom";

export default class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const busi = this.props.busi;
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <h3>PLACES</h3>
        <TableContainer>
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
                <TableRow key={row.id}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">
                    <Link
                      to={{
                        pathname: `/places/${row.id}`,
                        state: { data: row },
                      }}
                    >
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.website_url}</TableCell>
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
