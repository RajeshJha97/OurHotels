import Tour from './Tour';
import Nav from './Nav';
const Tours = (props) => {
  const { tours, removeTour } = props;

  return (
    <section className=' bg-blue-100'>
      <Nav />
      <main>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </main>
    </section>
  );
};

export default Tours;
