import GalleryPage from "@/components/Gallery";

const Seasonal = () => {
  return <GalleryPage category="seasonal" />;
};

export default Seasonal;

export function getStaticProps() {
  return {
    props: {},
  };
}
