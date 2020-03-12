import Link from "next/link";
import Layout from "../components/Layout";

import fetch from 'isomorphic-unfetch'
import {Currencies} from '../components/Currencies'


const Index = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitMonitor</h1>
        <p>Check current Bitcoin rates</p>
        <Currencies bpi={props.bpi} />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  }
}

export default Index;
