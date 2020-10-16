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
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbG9jYWwiLCJ1c2VySWQiOiI1ZjFlNjBhZDViMTMxODAxOWRkZjY0YTQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNjAyODI2OTE5LCJleHAiOjE2MDI4NTU3MTl9.Aaoj7b7O_ZwDtn35JW26KsWRtKOiDqrWM-8c1cAoO2FXZFQ7sMAFm7Y346Whlm2x8vO6KjJkjnxsVE-AxozboIbyq61zr1WxYsj8y3EbmMNOoAUU0Ouq6GN1F-gnBBwPG_sl_2WLlaMcXUzeMkHPbAItnIyH60NuVRN5JIxdBJR0Gk6hRTqeYQzYj9viwvpxIzjt0CZfygUWanAzmBdREcH2hSKVKrlUeoOsv0l9eI-G04EIw_oL9-twP1D-QLsAb9vtOmMKlX7USMQGjryBc2oL2RcwZYp-2z_3O76siSLhJV18XwcMWjDMMKyftJR_hSgMKrj2s90kafKZetyl4A',
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
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbG9jYWwiLCJ1c2VySWQiOiI1ZjFlNjBhZDViMTMxODAxOWRkZjY0YTQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNjAyODI2OTE5LCJleHAiOjE2MDI4NTU3MTl9.Aaoj7b7O_ZwDtn35JW26KsWRtKOiDqrWM-8c1cAoO2FXZFQ7sMAFm7Y346Whlm2x8vO6KjJkjnxsVE-AxozboIbyq61zr1WxYsj8y3EbmMNOoAUU0Ouq6GN1F-gnBBwPG_sl_2WLlaMcXUzeMkHPbAItnIyH60NuVRN5JIxdBJR0Gk6hRTqeYQzYj9viwvpxIzjt0CZfygUWanAzmBdREcH2hSKVKrlUeoOsv0l9eI-G04EIw_oL9-twP1D-QLsAb9vtOmMKlX7USMQGjryBc2oL2RcwZYp-2z_3O76siSLhJV18XwcMWjDMMKyftJR_hSgMKrj2s90kafKZetyl4A',
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
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbG9jYWwiLCJ1c2VySWQiOiI1ZjFlNjBhZDViMTMxODAxOWRkZjY0YTQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNjAyODI2OTE5LCJleHAiOjE2MDI4NTU3MTl9.Aaoj7b7O_ZwDtn35JW26KsWRtKOiDqrWM-8c1cAoO2FXZFQ7sMAFm7Y346Whlm2x8vO6KjJkjnxsVE-AxozboIbyq61zr1WxYsj8y3EbmMNOoAUU0Ouq6GN1F-gnBBwPG_sl_2WLlaMcXUzeMkHPbAItnIyH60NuVRN5JIxdBJR0Gk6hRTqeYQzYj9viwvpxIzjt0CZfygUWanAzmBdREcH2hSKVKrlUeoOsv0l9eI-G04EIw_oL9-twP1D-QLsAb9vtOmMKlX7USMQGjryBc2oL2RcwZYp-2z_3O76siSLhJV18XwcMWjDMMKyftJR_hSgMKrj2s90kafKZetyl4A',
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