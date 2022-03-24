import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

const About = () => {
    return (
        <div>
            <p>this is about component</p>            
        </div>
    );
};

About.getLayout = function getLayout(page) {
    return (
      <Layout title="domel_title" description="domel_description" keywords="domel_keywords">
        <Sidebar />
        {page}
      </Layout>
    );
};

export default About;