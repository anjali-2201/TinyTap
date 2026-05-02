import { useState } from "react";
import axios from "axios";

function ShortenerCard() {
  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [shortID, setShortID] = useState("");

  const handleShorten = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8001/url",
        {
          url,
        }
      );

      setShortID(res.data.id);

      setShortURL(
        `http://localhost:8001/${res.data.id}`
      );

    } catch (error) {
      console.log(error);
    }
  };

  const copyLink = () => {
  navigator.clipboard.writeText(shortID);
  alert("ID copied 🎀");
    };

  return (
    <div className="card">
      <h2>Shorten URL</h2>

      <input
        type="text"
        placeholder="Paste your long URL"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
      />

      <button onClick={handleShorten}>
        Create
      </button>

      {shortURL && (
  <div className="result">

    <p>
      Short URL:
      {" "}
      <a
        href={shortURL}
        target="_blank"
        rel="noreferrer"
      >
        {shortURL}
      </a>
    </p>

    <div className="id-section">
      <p>
        ID:
        {" "}
        {shortID}
      </p>

      <button onClick={copyLink}>
        Copy
      </button>
    </div>

  </div>
)}
    </div>
  );
}

export default ShortenerCard;