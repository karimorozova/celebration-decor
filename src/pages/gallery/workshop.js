import GalleryPage from "@/components/Gallery";
import React from "react";

const Workshop = () => {
  return <GalleryPage category="workshop" />;
};

export default Workshop;

export function getStaticProps() {
  return {
    props: {},
  };
}
