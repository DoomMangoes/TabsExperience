import "./styles.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Menu from "./Menu";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline" />
      </div>

      <div className="jobs-center">
        <Menu jobs={jobs} />
      </div>

      <button className="btn">More Info</button>
    </div>
  );
}
