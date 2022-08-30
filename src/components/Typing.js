import React, { useState, useEffect, useRef } from 'react'
import './Typing.scss';

// const NAMES = ["me", "sam", "scammo"];

function Typing({text}) {

    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + 'A')
        }, 1000)
    }, [currentText]);

    return (
        <p>{currentText}</p>
    );

//   const [name, setName] = useState(NAMES[0]);
//   const nameIndexRef = useRef(0);

//   useEffect(() => {
//     function addName() {
//         const interval = setInterval(() => {
//             setName((currName) => {
//                 if(currName.length === NAMES[nameIndexRef.current].length) {
//                     clearInterval(interval);
//                     setTimeout(() => {
//                         deleteName();
//                     }, 1000);
//                     return currName;
//                 }

//                 return NAMES[nameIndexRef.current].slice(0, currName.length + 1);
//             });
//         }, 200);
//         return interval;
//     }

//     function deleteName() {
//         const interval = setInterval(() => {
//             setName((currName) => {
//                 if(currName.length === 0) {
//                     clearInterval(interval);
//                     nameIndexRef.current = (nameIndexRef.current + 1) % NAMES.length;
//                     setTimeout(() => {
//                         addName();
//                     }, 1000);
//                     return currName;
//                 }

//                 return currName.slice(0, currName.length - 1);
//             });
//         }, 100);
//         return interval;
//     }

//     const interval = deleteName();

//     return () => clearInterval(interval);


//   }, []);



//   return (
//     <div className="pill">
//         <div>learn to code with {name}</div>
//         <div className="blink cursor" />
//     </div>
//   );
};

export default Typing;