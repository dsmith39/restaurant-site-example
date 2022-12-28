import React from "react";
import styles from "./InfoBar.module.scss";
interface InfoBarProps {
  // heading Content of the info bar
  title: string;
}
/**
 * {@link InfoBar} component
 * @remarks
 * This component shows important restaurant information at the top of the page
 * @param title - heading Content of the info bar
 * @returns - InfoBar component
 * @example
 * ```jsx
 * <InfoBar title="Info Bar" />
 * ```
 */
function InfoBar({ title }: InfoBarProps) {
  return (
    <aside className={styles.infoBar}>
      <h2>{title}</h2>
    </aside>
  );
}

export default InfoBar;
