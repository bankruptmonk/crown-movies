import React from "react";

import './error.styles.scss';

const Error = ({errors}) => {

    return (
        <>
            {errors && errors.length > 0 && (
                <div>
                    <div className="ontario-alert ontario-alert--warning">
                        <div className="ontario-alert__header">
                            <div className="ontario-alert__header-icon">
                                <svg className="ontario-icon" alt="" aria-hidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#ffd440"/><path d="M11 10h2v4h-2zm0 6h2v2h-2z" fill="#000"/>
                                </svg>
                            </div>
                            <h2 className="ontario-alert__header-title ontario-h4">Search Error</h2>
                        </div>
                        <div className="ontario-alert__body">
                            {errors.map(error => (
                                <p key={error.id}>{error.message}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )

};

export default Error;