import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className="page-content">
        
      <div className="heading-container">
          <h1 className="heading">SELECT A GAME TO PLAY</h1>
          <h2 className="sub-heading">by Kunal Nayak</h2>
        </div>
        <div className="container">
          <div
            className="card"
            onClick={() => (window.location.href = '/CAR-GAME/index.html')}
          >
            <h2>Car Game</h2>
            <img src="/car-game-thumbnail.jpg" alt="Car Game" />
          </div>
          <div
            className="card"
            onClick={() => (window.location.href = '/TIC-TAC-TOE/index.html')}
          >
            <h2>Tic Tac Toe</h2>
            <img src="/tic-tac-toe-thumbnail.jpg" alt="Tic Tac Toe" />
          </div>
          <div
            className="card"
            onClick={() =>
              (window.location.href = '/RockPaperScissor/index.html')
            }
          >
            <h2>Rock Paper Scissors</h2>
            <img
              src="/rock-paper-scissors-thumbnail.jpg"
              alt="Rock Paper Scissors"
            />
          </div>
          <div
            className="card"
            onClick={() => (window.location.href = '/Math-GAME/index.html')}
          >
            <h2>Math Game</h2>
            <img src="/math-game-thumbnail.jpg" alt="Math Game" />
          </div>
        </div>
      </div>
      <footer className={`footer ${showFooter ? 'show' : ''}`}>
        <p>&copy; {new Date().getFullYear()} Kunal Nayak. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Home;


