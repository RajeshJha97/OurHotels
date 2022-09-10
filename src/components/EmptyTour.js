import Nav from './Nav';
const EmptyTour = () => {
  return (
    <main className='h-screen bg-blue-200'>
      <Nav />
      <p className='text-center m-4'>No Tours Left</p>
    </main>
  );
};
export default EmptyTour;
