import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="nycterent/Admin-LT/clearsystems"
      repoId="R_kgDOJTDfFQ" // Pakeiskite į savo repozitorijos ID
      category="General"
      categoryId="DIC_kwDOJTDfFc4CpFGS" // Pakeiskite į savo kategorijos ID
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="lt"
      loading="lazy"
    />
  );
}
