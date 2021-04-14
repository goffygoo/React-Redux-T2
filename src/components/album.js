import React, { Component } from "react";
import { connect } from "react-redux";

class Album extends Component {

  render() {
    if (this.props.loadedAll) {
      var getd = this.props.allphoto.filter(
        (item) => item.albumId === +this.props.match.params.id
      );
    }

    return (
      <div>
        <h1 style={{textAlign: "center"}}>ALBUM {this.props.match.params.id}</h1>
        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-around"}}>
          {getd.map(photo => (
          <img style={{marginBottom: "20px"}} src={photo.url} alt="" />
          ))}
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  allphoto: state.album.allphoto,
  loadedAll: state.album.loadedAll,
})

const mapDespatchToProps = {
  
}

export default connect(mapStatesToProps, mapDespatchToProps)(Album);
