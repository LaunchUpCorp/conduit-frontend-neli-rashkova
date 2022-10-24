import React from 'react';
import BodyNavBar from './BodyNavBar';
import Articles from './Articles';

function Main() {
    return (
        <div className="flex flex-col w-3/4 p-1 mr-1">
            <BodyNavBar />
            <Articles />
        </div>
    )
}

export default Main;