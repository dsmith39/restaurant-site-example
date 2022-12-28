import Head from "next/head";
import React from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
/**
 * {@link Container} component
 * @remarks
 * This component has the Head tag for each page as well as the main content of the page
 * @param children content of the page
 * @param title The title of the page to be displayed in the browser tab
 * @param description The description of the page to be used in the meta tag
 * @returns - Container component jsx element
 * @example
 * ```jsx
 * <Container title="Home" description="Home page">
 *  <h1>Home</h1>
 * </Container>
 * ```
 */
function Container({ children, title, description }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default Container;
