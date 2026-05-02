import { useState } from "react";
import axios from "axios";

function AnalyticsCard() {
  const [analyticsID, setAnalyticsID] =
    useState("");

  const [analytics, setAnalytics] =
    useState(null);

  const getAnalytics = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8001/url/analytics/${analyticsID}`
      );

      setAnalytics(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <h2>Analytics</h2>

      <input
        type="text"
        placeholder="Enter short ID"
        value={analyticsID}
        onChange={(e) =>
          setAnalyticsID(e.target.value)
        }
      />

      <button onClick={getAnalytics}>
        Check
      </button>
      

      {analytics && (
        <>
            
          <p>
            <br></br>
            Total Clicks:
            
            {" "}
            {analytics.totalClicks}
          </p>
        </>
      )}
    </div>
  );
}

export default AnalyticsCard;