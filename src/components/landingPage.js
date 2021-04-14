import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { get10, initialize } from "./../action/photoAction";
import { incPage, changeY } from "../action/scrollAction";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  componentDidMount() {
    if(!this.props.landingPage.initialised){
      this.props.initialize(this.props.page);
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }

    
    let observer = new IntersectionObserver(this.observerFn.bind(this), options)
    
    observer.observe(this.loadRef);
  }

  observerFn = (entities, observer) => {
    if(this.props.landingPage.loaded) {
      const y = entities[0].boundingClientRect.y;
      if(this.props.y > y){
        this.props.incPage(this.props.page)
        this.props.get10(this.props.page)
      }
      this.props.changeY(y)
    }
  }

  render() {
    const photos = this.props.landingPage.photos;
    return (
      <div id="header">
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>Infinte Scroll implemented in this route</h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Scroll to the bottom of the page to view more photos</p>
        <Link style={{textDecoration: "none"}} to="/albums">
          <button
            style={{
              width:"100%",
              height:"30px",
              fontWeight:"bold",
              fontSize:"20px",
              backgroundColor: "#180c58",
              color:"#ebd82f",
              textDecoration: "none"
            }}
          >...or else click here to view it by Albums</button>
        </Link>
        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-around"}}>
          {photos &&
            photos.map((photo) => (
              <div>
                <Link to={`/${photo.id}`}>
                  <img
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                    src={photo.url}
                    alt=""
                  />
                </Link>
              </div>
            ))
          }
        </div>
        <div ref={loadRef => (this.loadRef = loadRef)}>
        {!this.props.landingPage.loaded && (<h1>Loading...</h1>)}
          </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  landingPage: state.landingPage,
  page: state.page.pageNumber,
  y: state.page.y
});

const mapDespatchToProps = {
  initialize,
  get10,
  changeY,
  incPage
};

export default connect(mapStatesToProps, mapDespatchToProps)(LandingPage);