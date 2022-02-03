import React, { Fragment, Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                <hr />
                <center>
                    <h3> &copy; Copyright Praveen Alluri {this.props.year}</h3>
                </center>
            </Fragment>
        )
    }
}

export default Footer;