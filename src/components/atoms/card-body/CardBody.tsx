import { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { Text } from './styles';

const showFull = 'Read more';
const showLess = 'Read less';

const CardBody = ({ text }: { text: string }) => {
  const [clamped, setClamped] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const onClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setClamped(!clamped);
    setExpanded(!expanded);
  };

  const showText = useMemo(() => (clamped ? showFull : showLess), [clamped]);

  useEffect(() => {
    if (textRef && textRef.current && textRef.current.scrollHeight > textRef.current.clientHeight) {
      setClamped(true);
    }
  }, [textRef, setClamped]);

  return (
    <>
      <Text ref={textRef} $expanded={expanded}>
        {text}
      </Text>
      {clamped || expanded ? <a onClick={onClick}>{showText}</a> : null}
    </>
  );
};

export default CardBody;
