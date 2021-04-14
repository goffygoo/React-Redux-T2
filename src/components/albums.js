import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAll } from "../action/photoAction";

class Albums extends Component {
  state = {
    output: [],
  };

  componentDidMount() {
    this.props.getAll();
  }

  render() {

    if (this.props.loadedAll) {
      var flag = [];
      var output = [];
      for (var i = 0; i < 4999; i++) {
        if (flag[this.props.allphoto[i].albumId]) continue;
        flag[this.props.allphoto[i].albumId] = true;
        output.push(this.props.allphoto[i].albumId);
      }
    }

    return (
      <div>
        <h1 style={{textAlign: "center"}}>Albums route</h1>
        <h3 style={{textAlign: "center"}}>Click on any number to load that particular album</h3>
        {!this.props.loadedAll && <h1>Loading...</h1>}
        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-around"}}>
          {this.props.loadedAll &&
            output.map((album) => (
            <Link to={`/album/${album}`} style={{textDecoration: "none"}}>
            <div style={{
                height:"200px",
                width:"200px",
                border:"20px solid black",
                borderRadius:"40px",
                marginTop:"20px",
                marginBottom:"20px",
                backgroundColor:"#f1d558"
              }}>
              <h1 style={{fontSize:"80px", textAlign:"center", textDecoration:"none"}}>{album}</h1>
            </div>
            </Link>
            ))}
          </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  allphoto: state.album.allphoto,
  loadedAll: state.album.loadedAll,
});

const mapDespatchToProps = {
  getAll,
};

export default connect(mapStatesToProps, mapDespatchToProps)(Albums);
