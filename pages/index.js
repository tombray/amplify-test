import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { DataStore } from "@aws-amplify/datastore";
import { Stations } from "../src/models";

export default function Home() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getStations = async () => {
      console.log("before datastore query");
      try {
        const stations = await DataStore.query(Stations);
        console.log(stations);
        setStations(stations);
      } catch (e) {
        console.log(e);
      }
    };

    getStations();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{stations.map((station) => station.name)}</div>
    </div>
  );
}
