import React, { Component } from "react";
import { Table, Head, Body, Row, Data } from "../components/common/table/Table";

export class UserPage extends Component {
  render() {
    return (
      <div className="container scrollY  fluid">
        <Table>
          <Head>
            <Row>
              <Data>Profile</Data>
              <Data>Email</Data>
              <Data>Name</Data>
              <Data>Posts</Data>
              <Data>OnMap</Data>
              <Data>Edit</Data>
            </Row>
          </Head>
        </Table>
        <table>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserPage;
