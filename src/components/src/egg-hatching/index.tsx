import { useRef, useState } from 'react';
import './style.css';

export function EggHatching() {
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef(
    new Audio('https://cherkoz.github.io/happy-happy-happy/assets/music/happy.mp3')
  );

  const handleClick = () => {
    audioRef.current.loop = true;
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    setClicked(false);
  };

  return (
    <div
      id={'easter-egg-animation'}
      className={clicked ? 'clicked' : ''}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      key={Date.now()}>
      <div className={'easter-egg'}>
        <div className={'egg'}>
          <div className={'shell'}></div>
        </div>
        <div className={'egg-top'}>
          <div className={'shell-top'}></div>
        </div>
      </div>
      <div className={'shadow'}></div>
      <div className={'text'}>
        <img src={'https://cherkoz.github.io/happy-happy-happy/assets/img/lera.png'} />
      </div>
    </div>
  );
}
