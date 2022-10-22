import React from 'react';

function Header() {
    return (
        <div className="bg-emerald-500 w-full">
            <div className="mx-auto flex flex-col justify-center items-center">
                <h1 className="font-sans font-extrabold text-4xl text-white text-center mt-4">conduit</h1>
                <p className="font-sans text-small font-light text-white text-center mb-3 mt-1">A place to share your knowledge.</p>
            </div>
        </div>
    );
}

export default Header;