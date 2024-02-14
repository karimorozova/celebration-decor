import GalleryPage from "@/components/Gallery";
import React from "react";

const Seasonal = () => {
  return <GalleryPage category="seasonal" />;
};

export default Seasonal;

export function getStaticProps() {
  return {
    props: {},
  };
}
