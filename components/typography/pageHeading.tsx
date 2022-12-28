import React from "react";
import styles from "./pageHeading.module.scss";

interface PageHeadingProps {
  /**
   * Content of the page heading
   */
  content: string;
}

/**
 * {@link PageHeading} component
 * @remarks
 * This component is used to display the page heading
 * @param content - Content of the page heading
 * @returns - PageHeading component
 * @example
 * ```jsx
 * <PageHeading content="Page Heading" />
 * ```
 */
function PageHeading({ content }) {
  return <h1 className={styles.pageHeading}>{content}</h1>;
}

export default PageHeading;
