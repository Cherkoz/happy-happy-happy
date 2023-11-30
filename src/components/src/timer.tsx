import { useEffect, useState } from 'react';
import { EggHatching } from './egg-hatching';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function Timer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Если время вышло, не устанавливаем новый таймаут
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Форматирование минут и секунд с ведущим нулем
  const formattedMinutes = `${timeLeft.minutes.toString().padStart(2, '0')}`;
  const formattedSeconds = `${timeLeft.seconds.toString().padStart(2, '0')}`;

  const timerComponent: JSX.Element = (
    <div className="flex text-center text-[68px]">
      <div className="w-[110px]">{formattedMinutes}</div> :{' '}
      <div className="w-[110px]">{formattedSeconds}</div>
    </div>
  );

  return (
    <>
      <div>
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          timerComponent
        ) : (
          <>
            <EggHatching />
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </>
        )}
      </div>
    </>
  );
}
