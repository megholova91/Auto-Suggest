/**
 * Presentational component that creates the UI
 */
import React from 'react';
import SearchIcon from '../images/SearchIcon';

export default class Autosuggest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { keyword,items} = this.props;
        return (
            <form>
                <div>AUTO SUGGEST BOX </div>
                <div className="search-container">
                    <input className="input-box" value={keyword} onChange={(e) => this.props.handleInputChange(e)} />
                    <button className="search-button" type="submit"><SearchIcon /></button>
                </div>
                {items.length > 0 && <div className="suggestion-box">
                    {items.map((item) => {
                        return (<a className="links" href={item.url} >{item.name}</a>)
                    })}
                </div>}
            </form>
        )
    }
}