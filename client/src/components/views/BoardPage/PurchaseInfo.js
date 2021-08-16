import React, { Component } from 'react';

export default class PurchaseInfo extends Component {
    render() {
        return (
            <div class="purchase_posting">{this.props.posting.title}</div>
        );
    }
}