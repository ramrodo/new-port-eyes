import React, { Fragment, useState } from 'react';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';
import './style.css';

const Dashboard = (props) => {

  const {
    url,
    container,
    parameters,
    height = "700px",
    width = "1000px",
    footerPaddingEnabled = true,
  } = props;

  const options = {
    url,
    container,
    parameters,
    scrolling: "no",
    height,
    width,
    locale: "en-US",
    footerPaddingEnabled,
    defaultEmbeddingVisualType: TABLE // this option only applies to experience embedding and will not be used for dashboard embedding
  };

  function onDashboardLoad(payload) {
    console.log("Do something when the dashboard is fully loaded.");
  }

  function onError(payload) {
    console.log("Do something when the dashboard fails loading");
  }

  /*
  const options = {
    url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId?isauthcode=true&identityprovider=quicksight&code=authcode",
    container: document.getElementById("embeddingContainer"),
    parameters: {
      country: "United States",
      states: [
        "California",
        "Washington"
      ]
    },
    scrolling: "no",
    height: "700px",
    width: "1000px",
    locale: "en-US",
    footerPaddingEnabled: true,
    defaultEmbeddingVisualType: TABLE // this option only applies to experience embedding and will not be used for dashboard embedding
  };
  */

  const dashboard = embedDashboard(options);
  dashboard.on("error", onError);
  dashboard.on("load", onDashboardLoad);

  return(<div id={container}></div>);
}

export default Dashboard;
