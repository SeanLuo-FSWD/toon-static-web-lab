import react, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/toons`)
      .then((response) => {
        console.log(response.data);
        setListing(response.data);
      })
      .catch((error) => {
        console.log("getCode error");
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Toons</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <table width={600}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {setListing.length &&
            listing.map((l) => {
              return (
                <>
                  <tr style={{ textAlign: "left" }}>
                    <td>{l.id}</td>
                    <td>
                      {l.firstName} {l.lastName}
                    </td>
                    <td>{l.occupation}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
