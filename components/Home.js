import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; 
import Tweet from './Tweets';

function Home() {

  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleTweet = () => {
    if (!newTweet.trim()) return;

    const newTempTweet = {
        firstname: '',      
        username: '',   
        content: newTweet,
    };

    setTweets([...tweets, newTempTweet]);
    setNewTweet('');
  };

  let tweetsData = tweets.map((data, i) => {
    return (
      <Tweet 
        key={i} 
        firstname={data.firstname}
        username={data.username}
        content={data.content}
      />
    );
  })

  return (
    <div className={styles.container}>
      
      {/* --- COLONNE DE GAUCHE (Menu) --- */}
      <div className={styles.leftSection}>
        {/* Image temporaire ou texte pour simuler le logo */}
        <div className={styles.logo}>🐦 Logo</div>
        
        <div className={styles.userInfo}>
           {/* Données fictives pour l'instant */}
          <div className={styles.userText}>
            <p className={styles.name}>John Doe</p>
            <p className={styles.handle}>@johndoe</p>
          </div>
        </div>

        <button className={styles.logoutBtn}>Logout</button>
      </div>

      {/* --- COLONNE DU MILIEU (Feed) --- */}
      <div className={styles.middleSection}>
        <h2 className={styles.title}>Home</h2>
        
        <div className={styles.createTweetContainer}>
          <input 
            type="text" 
            placeholder="What's up?" 
            className={styles.input}
            onChange={(e) => setNewTweet(e.target.value)}
            value={newTweet}
          />
          <button className={styles.tweetBtn} onClick={handleTweet}>Tweet</button>
        </div>

        <div className={styles.feed}>{tweetsData}</div>
           
      </div>

      {/* --- COLONNE DE DROITE (Trends) --- */}
      <div className={styles.rightSection}>
         <h2 className={styles.trendsTitle}>Trends</h2>
         <p>Ici s'afficheront les trends (Composant Trends)</p>
      </div>

    </div>
  );
}

export default Home;