const Loading = () => {
  return (
    <>
      <section className='h-[100vh] flex flex-col justify-center items-center gap-8 md:flex-row  bg-blue-100'>
        <main className='bg-blue-200 animate-ping w-16 h-16 md:w-48 md:h-48 rounded-full'></main>
        <main className='bg-blue-200 animate-ping w-16 h-16 md:w-48 md:h-20'></main>
      </section>
    </>
  );
};
export default Loading;
