import React from 'react';
import FeedSelector from "../ReusableComponents/FeedSelector";
import Articles from './Articles';
import TagSelector from './TagSelector';

function Feed() {
    return (
        <div className="mx-auto mt-5 flex justify-between w-3/4">
            <div className="flex flex-col w-3/4 p-1 mr-1">
                <FeedSelector />
                <Articles />
            </div>
            <TagSelector />
        </div>
    );
}

export default Feed;