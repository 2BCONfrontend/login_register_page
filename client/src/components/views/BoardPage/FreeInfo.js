import React, { Component } from 'react';

export default class FreeInfo extends Component {
    render() {
        return (
            <div class="free_posting">{this.props.posting.title}</div>
        );
    }
}