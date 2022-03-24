import React from 'react';
import LayoutBannerParallax from '../components/layoutBannerParallax';
import Sidebar from '../components/sidebar';

const Parallax = () => {
    return (
        <div>
            <p>this is parralax component</p>     
        </div>
    );
};

Parallax.getLayout = function getLayout(page) {
    return (
      <LayoutBannerParallax title="domel_title" description="domel_description" keywords="domel_keywords">
        <Sidebar />
        {page}
      </LayoutBannerParallax>
    )
  }

export default Parallax;