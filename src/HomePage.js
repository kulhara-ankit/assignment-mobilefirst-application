import React, { useState, useEffect } from 'react';
import './App.css';

function HomePage() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className="container ">
      <h2 className='text-center mb-3 home-joke'>Jokes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table">
          <table>
            <tbody>
              {jokes.map((joke, index) => (
                <tr key={index}>
                  <td>{joke.joke}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HomePage;