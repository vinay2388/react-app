import axios from "axios";

export function getCategory() {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFibG9jYWwiLCJ1c2VySWQiOiI1ZWUxYzQyYTkzNTljMTAwYzA4NTg0YmQiLCJ0ZW5hbnRJZCI6IjVjZTY3Yzg1ZWU0ZmEyMDAyZjhlNDEwOCIsIm9yZ0lkIjoiNWNlNjdhNjllZTRmYTIwMDJmOGUwZjEwIiwiaWF0IjoxNTk4OTM2MzI1LCJleHAiOjE1OTg5NjUxMjV9.X9uBxt0zuulWEEk77yrHmhALzAe4l5LqvSCMILWX3HQrDBsM2go8oGIACfkbVHWASl-euZJMxe_9LrQj1j0-Npb7JxgB_xfHr_TNcO2_M7i5OiKH2l7Mw89vBVGzy8dtXHrYjM-v8AlbhyCllIeEpLlNbzPJ8Wt1b88JwLTt3GM1FnRbYq03ZpkVjilhaAObJT7DzHbAKu8WbA7hg4kXg7h-YuG-YpDAYR-UgCXcmdZ2DyPZy-Wnqk5TQnSxXQnHknHfXRwpLfO-VPas8wgrwTUWHr6hUXaWhEiqgdGGKkdqVhXEfBfXZxzeRkCBA6SZBtmelxmuoC-BIm8KophuSQ',
        }
    };
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/categories/`, requestOptions).then((response) => {
            dispatch(showCategory(response.data))
        }).catch(error => {
            const errMsg = error.message;
            dispatch(showFailure(errMsg));
        })
    }
}

export function showCategory(categoryData) {
    return {
        type: "GET_CATEGORY",
        payload: categoryData
    }
}

export function showFailure(err) {
    return {
        type: "SHOW_FAILURE",
        payload: err
    }
}