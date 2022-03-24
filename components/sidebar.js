import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div>
            <p><br/><br/><br/><br/><br/><br/><br/>this is sidebar component</p>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <Link href="/parallax">
                <a>Parallax</a>
            </Link>
        </div>
    );
};

export default Sidebar;