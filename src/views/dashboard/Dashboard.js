import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { CCard, CCardBody } from "@coreui/react";

const Dashboard = () => {
  const [graphData, setGraphData] = useState({});

  const getDataFromApi = () => {
    const body = { token: window.localStorage.access_token };
    axios({
      method: "post",
      url: "http://test.elecsis.co/graph/",
      data: body,
    })
      .then(function (response) {
        setGraphData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <CCard>
        <CCardBody>
          <Line data={graphData} width={400} height={200} />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
