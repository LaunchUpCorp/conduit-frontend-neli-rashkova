import React from 'react';

function Header() {
    return (
        <div className="bg-green-500 bg-opacity-95 w-full mb-2.5 pt-2">
            <div className="mx-auto flex flex-col justify-center items-center">
                <h1 className="font-anton text-4xl text-white text-center tracking-wider mt-4">conduit</h1>
                <p className="font-sans text-small font-light text-white text-center mb-3.5 mt-1">A place to share your knowledge.</p>
            </div>
        </div>
    );
}

export default Header;