import Button from "../button/button";
import Chip from "../chip/chip";
import Heading from "../heading/heading";
import JobDiscription from "../jobDiscription/jobDiscription";
import Rate from "../rate/rate";
import UserName from "../userName/userName";
import styles from "./jobCard.module.scss";

const JobCard = ({ jobType, timeDuration, rate, jobHeading, userName, tags, description, ...props }) => {
  const items = 3;
  return (
    <>
      <div className={`${styles.jobCardWrapper} ${"shadow-sm"}`}>
        <div className="d-flex align-items-center justify-content-between m-b-35">
          <Chip variant={jobType}>{jobType}</Chip>
          <Rate>${rate} / hr</Rate>
        </div>
        <Heading variant="h2" className={`${styles.jobCardHeading} ${"text-center mt30"}`}>
          {jobHeading}
        </Heading>
        <UserName>{userName}</UserName>
        <div className={`${styles.tagsWrapper} ${"d-flex align-items-center justify-content-center"}`}>
          {tags.slice(0, items).map(function (data, i) {
            return (
              <>
                <Chip variant="Borderd">{data}</Chip>
              </>
            );
          })}
          <Chip variant="blue">+{tags.length - items}</Chip>
        </div>
        <JobDiscription>{description}</JobDiscription>
        <hr className={styles.hr} />
        <div className="text-center">
          <Button className="btn" variant="linkBtn">
            VIEW JOB
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
