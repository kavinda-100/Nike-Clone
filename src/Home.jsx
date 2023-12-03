
import {
  Hero,
  Services,
  Subscribe,
  PopularProducts,
  CustomerReviews,
  SpecialOffers,
  SuperQuality,
  Accordion,
} from "./sections";

function Home() {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding flex justify-center items-center flex-col">
        <Accordion />
      </section>
    </>
  );
}

export default Home;
