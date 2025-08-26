import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import type { SxProps } from '@mui/material';
import { useI18n } from '../i18n/I18nContext';

type CountdownProps = {
  dateTime: string;
  wordFormat?: 'full' | 'short';
  numberFormat?: boolean;
  onComplete?: () => void;
  sxBoxProps?: SxProps;
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
  sxBoxProps
}) => {
  const { t } = useI18n();
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

  const getLabel = (unit: keyof TimeLeft, value: number) => {
    const singular = value === 1;
    if (wordFormat === 'full') {
      switch (unit) {
        case 'days': return singular ? t('countdown.full.day', 'day') : t('countdown.full.days', 'days');
        case 'hours': return singular ? t('countdown.full.hour', 'hour') : t('countdown.full.hours', 'hours');
        case 'minutes': return singular ? t('countdown.full.minute', 'minute') : t('countdown.full.minutes', 'minutes');
        case 'seconds': return singular ? t('countdown.full.second', 'second') : t('countdown.full.seconds', 'seconds');
      }
    } else {
      switch (unit) {
        case 'days': return singular ? t('countdown.short.day', 'day') : t('countdown.short.days', 'days');
        case 'hours': return singular ? t('countdown.short.hr', 'hr') : t('countdown.short.hrs', 'hrs');
        case 'minutes': return singular ? t('countdown.short.min', 'min') : t('countdown.short.mins', 'mins');
        case 'seconds': return singular ? t('countdown.short.sec', 'sec') : t('countdown.short.secs', 'secs');
      }
    }
  };

  const props:SxProps = {...{marginX:'2vw'}, ...sxBoxProps};
  return (
  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Box component="ul" className="countdown" sx={{ listStyle: 'none', display: 'flex', p: 0, m: 0, width: 'auto' }}>
        {(['days', 'hours', 'minutes', 'seconds'] as (keyof TimeLeft)[]).map((unit) => (
      <Box component="li" key={unit} sx={{ flex: 1 }}>
            <Box className={unit} data-interval-text={getLabel(unit, timeLeft[unit])} sx={props}>
              <Typography sx={{fontSize:'clamp(0.5rem, 2vw + 2rem, 8rem)', fontWeight:700, color:'white'}}>{String(timeLeft[unit]).padStart(2, '0')} </Typography>
              <Typography sx={{fontSize:'clamp(0.1rem, 1vw + 0.8rem, 7rem)', color:'white'}}>{getLabel(unit, timeLeft[unit])}</Typography>
            </Box>
      </Box>
        ))}
    </Box>
    </Box>
  );
};

export default Countdown;
