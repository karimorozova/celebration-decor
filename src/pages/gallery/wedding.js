import GalleryPage from "@/components/Gallery";

const Wedding = () => {
  return <GalleryPage category="wedding" />;
};

export default Wedding;

export function getStaticProps() {
  return {
    props: {},
  };
}
