import React from 'react';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

function BackTop() {
  const [backtop, setbacktop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setbacktop(true);
      } else {
        setbacktop(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }

  return (
    <div>
      {backtop && (
        <button
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={scrollUp}
        >
          <IoIosArrowDropupCircle size={50} />
          UP
        </button>
      )}
    </div>
  );
}

export default BackTop;
