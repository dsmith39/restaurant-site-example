import React from "react";

interface InfoBarProps {
  // heading Content of the info bar
  title: string;
}
/**
 * InfoBar component
 * @remarks
 * This component is part of the {@link InfoBar} component
 * @param title - heading Content of the info bar
 * @returns - InfoBar component
 */
function InfoBar({ title }: InfoBarProps) {
  return (
    <aside>
      <h2>{title}</h2>
    </aside>
  );
}

export default InfoBar;
