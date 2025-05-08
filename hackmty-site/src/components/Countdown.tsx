import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material';
type CountdownProps = {
  dateTime: string;
  wordFormat?: 'full' | 'short';
  numberFormat?: boolean;
  onComplete?: () => void;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC<CountdownProps> = ({
  dateTime,
  wordFormat = 'short',
  numberFormat = false,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = Date.parse(dateTime) / 1000;
      const currentDate = Math.floor(Date.now() / 1000);
      let seconds = eventDate - currentDate;

      if (seconds <= 0) {
        clearInterval(intervalRef.current!);
        onComplete?.();
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(seconds / (24 * 60 * 60));
      seconds -= days * 24 * 60 * 60;
      const hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;
      const minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      setTimeLeft({
        days: numberFormat ? pad(days) : days,
        hours: numberFormat ? pad(hours) : hours,
        minutes: numberFormat ? pad(minutes) : minutes,
        seconds: numberFormat ? pad(seconds) : seconds,
      });
    };

    intervalRef.current = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalRef.current!);
  }, [dateTime, numberFormat, onComplete]);

  const pad = (num: number): number => parseInt(num < 10 ? '0' + num : '' + num);
  const theme = useTheme(); // Get the MUI theme

  const getLabel = (unit: keyof TimeLeft, value: number) => {
    if (wordFormat === 'full') {
      switch (unit) {
        case 'days': return value === 1 ? 'day' : 'days';
        case 'hours': return value === 1 ? 'hour' : 'hours';
        case 'minutes': return value === 1 ? 'minute' : 'minutes';
        case 'seconds': return value === 1 ? 'second' : 'seconds';
      }
    } else {
      switch (unit) {
        case 'days': return value === 1 ? 'day' : 'days';
        case 'hours': return value === 1 ? 'hr' : 'hrs';
        case 'minutes': return value === 1 ? 'min' : 'mins';
        case 'seconds': return value === 1 ? 'sec' : 'secs';
      }
    }
  };

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <ul className="countdown" style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
        {(['days', 'hours', 'minutes', 'seconds'] as (keyof TimeLeft)[]).map((unit) => (
          <li key={unit}>
            <Box className={unit} data-interval-text={getLabel(unit, timeLeft[unit])} sx={{marginX:'4vw'}}>
              <Typography sx={{fontSize:'clamp(0.5rem, 2vw + 2rem, 8rem)', fontWeight:700, color:'white'}}>{String(timeLeft[unit]).padStart(2, '0')} </Typography>
              <Typography sx={{fontSize:'clamp(0.1rem, 1vw + 0.8rem, 7rem)', color:'white'}}>{getLabel(unit, timeLeft[unit])}</Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Countdown;
