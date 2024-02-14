import GalleryPage from "@/components/Gallery";
import React from "react";

const Events = () => {
  return <GalleryPage category="events" />;
};

export default Events;

export function getStaticProps() {
  return {
    props: {},
  };
}
