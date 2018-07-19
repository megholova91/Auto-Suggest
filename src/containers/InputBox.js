/**
 * Presentational component that creates the UI
 */
import React from 'react';
import SearchIcon from '../images/SearchIcon';

export default class Autosuggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items,
        })
    }

    clearSuggestions(e) {
        if (!(e.target.className === 'link' || e.target.className === 'input-box')) {
            this.setState({
                items: []
            });
        }
    }

    render() {
        let { keyword } = this.props;
        let { items } = this.state;
        return (
            <div className="auto-suggest" onClick={(e) => this.clearSuggestions(e)}>
                <div className="search">
                    <div>AUTO SUGGEST BOX </div>
                    <div className="search-container">
                        <input className="input-box" value={keyword} onChange={(e) => this.props.handleInputChange(e)} />
                        {items.length > 0 && <div className="suggestion-box">
                            {items.map((item, index) => {
                                return (<a className="links" href={item.url} key={index}>{item.name}</a>)
                            })}
                        </div>}
                        <button className="search-button" type="submit"><SearchIcon /></button>
                    </div>
                </div>
            </div>
        )
    }
}