import "../styles/globals.css";
import { Amplify, DataStore } from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
