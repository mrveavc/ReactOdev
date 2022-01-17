import React, { Component } from 'react';

class DetailPage extends Component {
    render() {
        return (
            <div>
                <h1>Detail</h1>
                <table id="tablo">
                <tbody>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Telefon</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td> {this.props.parentState.name}</td>
                        <td> {this.props.parentState.username}</td>
                        <td> {this.props.parentState.phone}</td>
                        <td> {this.props.parentState.email}</td>
                        <td> {this.props.parentState.website}</td>
                        
                    </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

export default DetailPage