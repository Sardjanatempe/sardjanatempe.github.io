import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  className?: string;
}

const TypeWriter = ({ texts, className = '' }: TypeWriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          const timeout = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          }, typeSpeed);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
          return () => clearTimeout(timeout);
        }
      } else {
        if (currentText.length > 0) {
          const timeout = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          }, deleteSpeed);
          return () => clearTimeout(timeout);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    };

    type();
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
