import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import WindowDim from '../components/windowDim';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Index = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <WindowDim />
    {!matches && <MobileComp />}
    {matches && <DesktopComp />}
    </>
  );
};

const MobileComp = () => {
  return (
    <p>this is mobile component</p>
  )
}

const DesktopComp = () => {
  return (
    <p>this is desktop component</p>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout title="domel_title" description="domel_description" keywords="domel_keywords">
      <Sidebar />
      {page}
    </Layout>
  )
}

export default Index;