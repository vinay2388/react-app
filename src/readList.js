import React, { Component } from 'react';
// import * as actionCreators from './actions/index.js';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getCategory } from './actions/index.js';

class ReadList extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFibG9jYWwiLCJ1c2VySWQiOiI1ZWUxYzQyYTkzNTljMTAwYzA4NTg0YmQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNTk5MDQ2NDE0LCJleHAiOjE1OTkwNzUyMTR9.bWK0dcJt1Zommu4J1Gad1AsMBZ7XXYG2muLGYaraedmVVTOz3h_GwFFm8hGieuSKAM8p9RfFX48CaLVnAp7xxCZ4HuhoI_mr6c7I_hYnGMmjGEFFbczCZawfG2xUbqTVh4Ij3t6GrYgw_MCJfcghj5WA_19euzLo8Me59p9f6kz54x8Dhahj6glfR2UE2RuYSPGwgHCWWNtz6dVLie7dkx_q-x5xYLpelfdOp3Sbgp2BJa1bgxwRSoht0wvHZyQ_kosEzSvd_k_kxX04BTUuKFf-TXswjC5BK3EXLPDSc6cShgtdUnwcG0R2abzRQN-pdQJkAlO6wF4v_gd7toso1w',
            }
        };
        fetch(`${process.env.REACT_APP_API_URL}/api/categories/`, requestOptions)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
    }

    deleteItem = (data, e) => {
        console.log(data);
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFibG9jYWwiLCJ1c2VySWQiOiI1ZWUxYzQyYTkzNTljMTAwYzA4NTg0YmQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNTk5MDIzNzc2LCJleHAiOjE1OTkwNTI1NzZ9.oDBfEO8BZLK_njA4Et0DkxLkj2M5uxn0TLH_LvDBQ_yj7MCekDe5kQ5gxlI41TCMblYa_9q8caRNz6W2Bmb2ngAHp2o82E6bj1e1EWmzE4fA6LRiUG4st5WCRfP0K0jSikqEJsnboLGYq4wOPD1-Zp1HjEOEDYkVVzRF3fwQnygts2BN0pdZz0UsN0gsMBHaj2a0rKLB1C13m8o0ufK8K5NNhBppMdy16Vm5Oul20CPJKsWyXcTDnedUQizaiT_fPMhK7Pplexqel_72SgRxm1Kdju4omCABJOWxeVpcTO8QH5WBlXW5IahYIyqtTDtR6DeSl48HsIk36vzSp-Il5A',
            }
        };
        fetch(`${process.env.REACT_APP_API_URL}/api/categories/` + data._id, requestOptions)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
    }

    handleChange(event, index) {
        var categories = this.state.apiResponse.slice(); // Make a copy of the categories first.
        categories[index].categoryName = event.target.value;
        this.setState({ [this.state.apiResponse]: categories });
        console.log(this.state.apiResponse);
    }

    updateItem = (data, e) => {
        console.log(data);

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFibG9jYWwiLCJ1c2VySWQiOiI1ZWUxYzQyYTkzNTljMTAwYzA4NTg0YmQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNTk5MDIzNzc2LCJleHAiOjE1OTkwNTI1NzZ9.oDBfEO8BZLK_njA4Et0DkxLkj2M5uxn0TLH_LvDBQ_yj7MCekDe5kQ5gxlI41TCMblYa_9q8caRNz6W2Bmb2ngAHp2o82E6bj1e1EWmzE4fA6LRiUG4st5WCRfP0K0jSikqEJsnboLGYq4wOPD1-Zp1HjEOEDYkVVzRF3fwQnygts2BN0pdZz0UsN0gsMBHaj2a0rKLB1C13m8o0ufK8K5NNhBppMdy16Vm5Oul20CPJKsWyXcTDnedUQizaiT_fPMhK7Pplexqel_72SgRxm1Kdju4omCABJOWxeVpcTO8QH5WBlXW5IahYIyqtTDtR6DeSl48HsIk36vzSp-Il5A',
            },
            body: JSON.stringify(data)
        };
        fetch(`${process.env.REACT_APP_API_URL}/api/categories/` + data._id, requestOptions)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
    }

    render() {
        return (
            <div>
                {this.state && (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.apiResponse.map((cate, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <input className="form-control" type="text" name="categoryName" defaultValue={cate.categoryName} onChange={(evt) => this.handleChange(evt, idx)}></input>
                                            </td>
                                            {/* <td>{cate.categoryName}</td> */}
                                            <td>{cate.createdBy}</td>
                                            <td><button value={cate.categoryName} onClick={this.deleteItem.bind(this, cate)}>DELETE</button></td>
                                            <td><button value={cate.categoryName} onClick={this.updateItem.bind(this, cate)}>UPDATE</button></td>
                                        </tr>
                                    ))
                                    // this.state.apiResponse
                                }
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         categoryData: state.categoryData
//     }
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({ getCategory: getCategory }, dispatch)
// }

// const matchDispatchToProps = dispatch => {
//     return {
//         getCategory: () => dispatch(getCategory())
//     }
// }

// export default connect(mapStateToProps, matchDispatchToProps)(ReadList);
export default ReadList;