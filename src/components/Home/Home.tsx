import { useState, useEffect, useRef } from 'react';
import './Home.scss';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const phrase = "fullstack developper";

const Home = () => {
    const [title, setTitle] = useState(phrase);
    const intervalRef = useRef(0);

    const onMouseOver = () => {
        let iterations = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setTitle(
                phrase.split("").map((_, index) => {
                    if (index < iterations) {
                        return phrase[index];
                    } else {
                        return letters[Math.floor(Math.random() * 52)];
                    }
                }).join("")
            );
            
            if (iterations >= phrase.length) clearInterval(intervalRef.current);

            iterations += 1 / 3;
        }, 25);
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div id="home" className="Home">
            <header className="Home-header">
                <h1><strong>Hi, I'm Julien Richard</strong></h1> 
                <p>and I'm a 
                    <a id="interactive_title" data-value="" onMouseOver={onMouseOver}> {title} </a>
                </p>
            </header>
        </div>
    );
}

export default Home;
