import React from "react";

import './error.styles.scss';

const Warning = ({errors}) => {

    return (
        <>
            {errors && errors.length > 0 && (
                <div>
                    <div className="ontario-alert ontario-alert--error">
                        <div className="ontario-alert__header">
                            <div className="ontario-alert__header-icon">
                                <svg className="ontario-icon" alt="" aria-hidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#cd0000"/><path d="M11 17h2v-2h-2v2zm0-4h2V7h-2v6z" fill="#fff"/></svg>
                                </svg>
                            </div>
                            <h2 className="ontario-alert__header-title ontario-h4">There is a problem</h2>
                        </div>
                        <div className="ontario-alert__body">
                            <p>Errors were found on this page:</p>
                            <ul>
                                {errors.map(error => (
                                    <li key={error.id}>{error.message}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

};

export default Warning;