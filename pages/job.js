import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import JobCard from "../components/JobCard/JobCard";
import Container from "../components/container/container";

export default function job() {
  return (
    <Layout title="Job Card">
      <Intro> Job Card </Intro>
      <Container>
        <JobCard
          jobType="hourly"
          timeDuration="hourly"
          rate="55"
          jobHeading="UI/UX Designer"
          userName="Epic Coders"
          tags={["UI", "UX", "photoshop", "vscode", "illustrator", "sublime text"]}
          description="Elit sunt nostrud non consequat labore officia. Nulla adipisicing veniam officia fugiat. Et nisi veniam nulla ea id sint elit esse. Aute voluptate anim officia consequat Lorem labore deserunt elit elit eiusmod exercitation. Occaecat velit Lorem ex officia velit commodo. Laborum incididunt nostrud amet amet deserunt Lorem ipsum duis ea. Eiusmod dolore ut dolor do dolore adipisicing qui elit."
        ></JobCard>
        <JobCard
          jobType="part-time"
          timeDuration="part time"
          rate="32"
          jobHeading="Branding Expert"
          userName="Hubstaff"
          tags={["PHP", "android", "iOS", "React Native", "illustrator"]}
          description="Elit sunt nostrud non consequat labore officia. Nulla adipisicing veniam officia fugiat. Et nisi veniam nulla ea id sint elit esse. Aute voluptate anim officia consequat Lorem labore deserunt elit elit eiusmod exercitation. Occaecat velit Lorem ex officia velit commodo. Laborum incididunt nostrud amet amet deserunt Lorem ipsum duis ea. Eiusmod dolore ut dolor do dolore adipisicing qui elit."
        ></JobCard>
        <JobCard
          jobType="full-time"
          timeDuration="full time"
          rate="55"
          jobHeading="UI/UX Designer"
          userName="Epic Coders"
          tags={["UI", "UX", "photoshop", "vscode"]}
          description="Elit sunt nostrud non consequat labore officia. Nulla adipisicing veniam officia fugiat. Et nisi veniam nulla ea id sint elit esse. Aute voluptate anim officia consequat Lorem labore deserunt elit elit eiusmod exercitation. Occaecat velit Lorem ex officia velit commodo. Laborum incididunt nostrud amet amet deserunt Lorem ipsum duis ea. Eiusmod dolore ut dolor do dolore adipisicing qui elit."
        ></JobCard>
      </Container>
    </Layout>
  );
}
