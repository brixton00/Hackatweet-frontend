import React from 'react';
import styles from '../styles/Tweets.module.css';

// props : c'est le sac de données que le parent (Home) va lui donner
function Tweet(props) {
  return (
    <div className={styles.tweetContainer}>
      
      {/* Partie GAUCHE : L'avatar */}
      <div className={styles.avatarSection}>
        <img src="avatar.png" alt="Avatar" className={styles.avatar} />
      </div>

      {/* Partie DROITE : Le contenu */}
      <div className={styles.contentSection}>
        
        {/* En-tête : Nom, @username et date */}
        <div className={styles.header}>
          <span className={styles.name}>{props.firstname}</span>
          <span className={styles.username}>@{props.username}</span>
          <span className={styles.date}>• 5h</span>
        </div>

        {/* Le texte du tweet */}
        <p className={styles.text}>{props.content}</p>
        
        {/* Les icônes (Like et Poubelle) */}
        <div className={styles.icons}>
            {/* On utilise des emojis pour l'instant pour faire simple */}
            <span className={styles.icon}>❤️ 1</span>
            <span className={styles.icon}>🗑️</span>
        </div>
      </div>

    </div>
  );
}

export default Tweet;