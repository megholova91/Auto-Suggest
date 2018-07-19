/**
 * Container component that calls API and does all functionality
 */
import React from 'react';
import InputBox from './InputBox';
import http from 'axios';

export default class Autosuggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            keyword: '',
        }
    }

    /** Function that calls API on input change*/
    handleInputChange(e) {
        let keyword = e.target.value;
        let suggestions = [];
        this.setState({
            suggestions: suggestions,
            keyword: keyword
        });
        if (keyword.length > 0) {
            http.get('https://api.github.com/users').then((response) => {          
                response.data.forEach(element => {
                    if(element.login && element.html_url && element.login.includes(keyword)) {
                        suggestions.push({
                            'name': element.login,
                            'url': element.html_url
                        });
                    }  
                });
                this.setState({
                    suggestions: suggestions
                });
            }).catch((err) => {
                console.log("Error in fetching data : " + err);
            });
        }
    }

    render() {
        return (
            <InputBox
                items={this.state.suggestions}
                keyword={this.state.keyword}
                handleInputChange={(e) => this.handleInputChange(e)} />
        )
    }
}