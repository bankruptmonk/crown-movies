import React from "react";

import './loading.styles.scss';

const Loading = (props) => {
    return (
        <div className="site__spinner-holder">
            <div className="site__spinner">
                <div className="site__loader"></div>
                <span className="sr-only">Page Loading</span>
            </div>
        </div>
    );
}

export default Loading;