import React, { Component } from 'react';

var apiResponse, error;
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryName: ''
        }
    }
    changeHandler = e => {
        this.setState = ({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFibG9jYWwiLCJ1c2VySWQiOiI1ZWUxYzQyYTkzNTljMTAwYzA4NTg0YmQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNTk5MDQ2NDE0LCJleHAiOjE1OTkwNzUyMTR9.bWK0dcJt1Zommu4J1Gad1AsMBZ7XXYG2muLGYaraedmVVTOz3h_GwFFm8hGieuSKAM8p9RfFX48CaLVnAp7xxCZ4HuhoI_mr6c7I_hYnGMmjGEFFbczCZawfG2xUbqTVh4Ij3t6GrYgw_MCJfcghj5WA_19euzLo8Me59p9f6kz54x8Dhahj6glfR2UE2RuYSPGwgHCWWNtz6dVLie7dkx_q-x5xYLpelfdOp3Sbgp2BJa1bgxwRSoht0wvHZyQ_kosEzSvd_k_kxX04BTUuKFf-TXswjC5BK3EXLPDSc6cShgtdUnwcG0R2abzRQN-pdQJkAlO6wF4v_gd7toso1w',
            },
            body: JSON.stringify(this.state)
        };
        fetch(`${process.env.REACT_APP_API_URL}/api/categories/`, requestOptions)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => {
                this.setState({ error: err })
            })
    }

    render() {
        // const { categoryName } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="categoryName" value={this.state.categoryName} onChange={e => this.setState({ categoryName: e.target.value })}></input>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>

                <span>
                    {this.state && this.state.error && (
                        { error }
                    )}
                </span>
            </div >
        )
    }
}

export default PostForm;