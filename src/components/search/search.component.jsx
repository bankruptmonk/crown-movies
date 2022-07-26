import React from "react";

import './search.styles.scss';

const Search = (props) => {

    const { handleEnter, handleChange, handleClick, value } = props;

    return (
        <form onSubmit={(e) => e.preventDefault()}>
        <div className="ontario-row">
            <div className="ontario-columns ontario-large-8 ontario-medium-8 ontario-small-12">
                
                    <label className="sr-only" for="txtSearch">Search Terms</label>
                    <input className="ontario-input" type="text" id="txtSearch"
                        onKeyUp={handleEnter} onChange={handleChange} value={value} />
                
            </div>
            <div className="ontario-columns ontario-large-4 ontario-medium-4 ontario-small-12">
                <button className="ontario-button ontario-button--primary"
                    onClick={handleClick}>
                    Search
                </button>
            </div>
        </div>
        </form>

    );
}

export default Search;