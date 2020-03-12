import Link from "next/link";
import Layout from "../components/Layout";

import fetch from 'isomorphic-unfetch'
import {Price} from '../components/Price'


const Index = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BizPrices</h1>
        <p>Check current Bitcoin rates</p>
        <Price bpi={props.bpi} />
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
