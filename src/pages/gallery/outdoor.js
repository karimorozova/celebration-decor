import GalleryPage from "@/components/Gallery";

const Outdoor = () => {
  return <GalleryPage category="outdoor" />;
};

export default Outdoor;

export function getStaticProps() {
  return {
    props: {},
  };
}
