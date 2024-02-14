import GalleryPage from "@/components/Gallery";

const Events = () => {
  return <GalleryPage category="events" />;
};

export default Events;

export function getStaticProps() {
  return {
    props: {},
  };
}
