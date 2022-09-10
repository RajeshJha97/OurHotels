import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import EmptyTour from './components/EmptyTour';
import './App.css';

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours([...newTours]);
  };

  const fetchTours = () => {
    setLoading(true);
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setLoading(false);
          setTours(data);
        });
    } catch (error) {
      console.log(`error:${error}`);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    if (tours.length > 0) {
      return (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      );
    } else {
      return <EmptyTour />;
    }
  }
}

export default App;
