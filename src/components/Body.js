import React from 'react';
import Main from './Main';
import Side from './Side';

function Body() {
    return (
        <div className="mx-auto mt-5 flex justify-between w-3/4">
            <Main />
            <Side />
        </div>
    );
}

export default Body;