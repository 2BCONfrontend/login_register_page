import React, { Component } from 'react';

export default class ReviewInfo extends Component {
    render() {
        return (
            <div class="review_posting">{this.props.posting.title}</div>
        );
    }
}