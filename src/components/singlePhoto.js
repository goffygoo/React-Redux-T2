import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Photo from "./photo";

class SinglePhoto extends Component {

  state = {
      getd: []
  }

  getd = [];
  getDetail = (id) => {
    if (this.props.landingPage.photos) {
      this.setState({
        getd: this.props.landingPage.photos.filter((item) => item.id === +id)
      })
    }
  };

  componentDidMount() {
    this.getDetail(this.props.match.params.id);
  }

  render() {
    if (this.state.getd.length > 0) {
      return (
        <Photo data={this.state.getd[0]} />
      )
    } else {

      return (
          <div>
            <h1>Loading...</h1>
            <p style={{textAlign:"left", fontSize:"14 px"}}>If the page appeared broken it's beacuse you have reloaded a the page. <br></br>Thus redux state manager gets cleared of data and we are not allowed to fetch content every time, try returning to home screen home.</p>
            <Link to="/">Click here</Link>
          </div>
      )
    }
  }
}

const mapStatesToProps = (state) => ({
  landingPage: state.landingPage,
  page: state.page.page,
})

const mapDespatchToProps = {

}

export default connect(mapStatesToProps, mapDespatchToProps)(SinglePhoto);
