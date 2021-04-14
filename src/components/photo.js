import React, { Component } from 'react'

export default class photo extends Component {
    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h2>Showing photo with ID {this.props.data.id} in Album : {this.props.data.albumId}</h2>
                <h1>{this.props.data.title}</h1>
                <img src={this.props.data.url} alt=""/>
            </div>
        )
    }
}
