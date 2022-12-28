import styles from "../styles/Home.module.scss";
import Container from "../components/atoms/container";
import InfoBar from "../components/molecules/info-bar";
import PageHeading from "../components/typography/pageHeading";
export default function Home() {
  return (
    <Container
      title={"Home"}
      description={"The landing page for a test restaurant site"}
    >
      <InfoBar title={"Now Opened at our new location"} />
      <PageHeading content={"Landing Page"} />
    </Container>
  );
}
