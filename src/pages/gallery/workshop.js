import GalleryPage from "@/components/Gallery";

const Workshop = () => {
  return <GalleryPage category="workshop" />;
};

export default Workshop;

export function getStaticProps() {
  return {
    props: {},
  };
}
