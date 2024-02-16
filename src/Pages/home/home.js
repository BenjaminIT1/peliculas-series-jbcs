import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/index";
import Cards from '../../components/Cards/indexCards';
import Cards2 from '../../components/Cards/index2';


function Home() {
  return (
    <Layout>
      <div className="flex">
  <div className="w-1/2 pr-4">
    <Cards />
  </div>
  <div className="w-1/2 pl-4">
    <Cards2 />
  </div>
</div>

    </Layout>
  );
}

export default Home;
