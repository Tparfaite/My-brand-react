import  { useState, useEffect } from 'react';


import homepack from "../../assets/images/homepack.png"
import idoGif from '../../assets/images/ido.gif';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const sentences = [
    `Empowering Tech Talent for Global Impact`
  ];
  
  const typingSpeed = 150; // Time between typing characters
  const deletingSpeed = 50; // Time between deleting characters
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current sentence to display
      const currentSentence = sentences[textIndex];

      if (!isDeleting) {
        // Typing effect
        setDisplayedText((prev) => prev + currentSentence[displayedText.length]);
        
        if (displayedText.length === currentSentence.length - 1) {
          setIsDeleting(true);
        }
      } else {
        // Deleting effect
        // setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Move to the next sentence
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [displayedText, isDeleting, textIndex, sentences]);

  return (
    <div className="brand-container mt-auto p-2 w-full md:p-4 ">
      <div className="w-full my-20 lg:flex justify-center gap-8">
        <img
          src={homepack}
          alt="mypic"
          className="h-auto w-80  rounded-xl shadow-lg"
        />
        <div className=" m-2 lg:m-10 w-full md:w-1/2">
          <p className="shadow p-5 text-md  md:text-xl lg:text-2xl ">{displayedText}</p>
          <div className="mx-auto h-1/2 w-full text-xl">
            <h3 className="font-bold mx-auto p-5 pb-0 text__gradient">Who Are We?</h3>
            <p className='shadow p-5 text-sm md:text-xl lg:text-sm '>
            Pack Technology is committed to addressing pressing global challenges through innovative tech solutions, empowering individuals with the knowledge and skills they need to succeed and collaborates with international organizations for wider impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
