import GalleryPage from "@/components/Gallery";
import React from "react";

const Outdoor = () => {
  return <GalleryPage category="outdoor" />;
};

export default Outdoor;

export function getStaticProps() {
  return {
    props: {},
  };
}
