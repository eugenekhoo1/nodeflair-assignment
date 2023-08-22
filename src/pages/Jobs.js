import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoCard from "../components/cards/InfoCard";
import JobCard from "../components/cards/JobCard";
import PageNav from "../components/PageNav";
import { getPostings, getMaxPage } from "../lib/mockApi";
import "../styles/jobs.css";

export default function Jobs() {
  const { page } = useParams();
  const [activePagePostings, setActivePagePostings] = useState(
    getPostings(page)
  );
  const [activePosting, setActivePosting] = useState(0); // index

  useEffect(() => {
    const getActivePagePostings = () => {
      setActivePagePostings(getPostings(page));
    };

    getActivePagePostings();
  }, [page]);

  const handleJobCardClick = (index) => {
    setActivePosting(index);
  };

  const handlePageClick = () => {};

  return (
    <>
      {console.log(page)}
      <div className="container">
        <div className="container-jobs">
          <div className="jobs-panel">
            <div className="job-listing-container">
              {activePagePostings.map((posting, index) => (
                <JobCard
                  posting={posting}
                  active={index === activePosting ? true : false}
                  onJobCardClick={() => handleJobCardClick(index)}
                />
              ))}
              <PageNav
                page={parseInt(page)}
                maxPage={getMaxPage()}
                onPageClick={() => handlePageClick()}
              />
            </div>
            <div className="job-information-container">
              <InfoCard posting={activePagePostings[activePosting]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
