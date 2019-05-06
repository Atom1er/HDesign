import React from "react";

var Heart = React.createClass({

    getInitialState: () => {
        return{
            hover: false
        };
    },
    hoverOn: () => {
        this.setState({ hover: true });
    },
    hoverOff: () => {
        this.setState({ hover: false });
    },
    render: () => {
        return (

            

            <i className={ this.state.hover ? "fa fa-heart" : "fa fa-heart-o"}
                onMouseEnter={this.hoverOn} 
                onMouseLeave={this.hoverOff}
            >
            
            </i>

        )
    }

})

export default Heart;