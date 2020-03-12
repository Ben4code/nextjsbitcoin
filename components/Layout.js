import Head from "next/head";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/darkly/bootstrap.css"
        />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};
export default Layout;
