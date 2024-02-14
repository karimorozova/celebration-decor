import GalleryPage from "@/components/Gallery";
import React from "react";

const Wedding = () => {
  return <GalleryPage category="wedding" />;
};

export default Wedding;

export function getStaticProps() {
  return {
    props: {},
  };
}
