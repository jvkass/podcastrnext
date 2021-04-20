import styles from './styles.module.scss';

export function Player(){


  return(
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.Slider}/>
          <div className={styles.emptySlider}/>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button>
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button>
            <img src="/play.svg" className={styles.playButton} alt="Tocar"/>
          </button>
          <button>
            <img src="/play-next.svg" alt="Tocar proxima"/>
          </button>
          <button>
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>

      </footer>
    </div>
  );
}