import { useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function AnalyticsCard() {
  const [analyticsID, setAnalyticsID] =
    useState("");

  const [analytics, setAnalytics] =
    useState(null);

    const [showLogs, setShowLogs] =
    useState(false);

  const getAnalytics = async () => {
    try {
      const res = await axios.get(
        `${BACKEND_URL}/url/analytics/${analyticsID}`
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
        <div className = "result">
        
            
          <p>
            <br></br>
            Total Clicks:
            
            {" "}
            {analytics.totalClicks}
          </p>

          <button
            onClick={() =>
              setShowLogs(
                !showLogs
              )
            }
          >
            {showLogs
              ? "Hide Logs"
              : "View Click Logs"}
          </button>

          {showLogs &&
            analytics.analytics.map(
              (
                item,
                index
              ) => (
                <p key={index}>
                  {new Date(
                    item.timestamp
                  ).toLocaleString()}
                </p>
              )
            )}
            
        </div>

      )}
    </div>
  );
}

export default AnalyticsCard;