import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithubSquare,
    faTwitterSquare,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <div className="active page">
            <h1>Hi, I'm Irfan.</h1>
            <p>
                I am a Software Developer and I <FontAwesomeIcon icon={faHeart} style={{"color":"red"}}/> to learn.
            </p>
            <section className="links">
                <a href="https://github.com/irfanzainudin">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href="https://twitter.com/irfan__zainudin">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a href="https://www.linkedin.com/in/irfanozainudin/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </section>
        </div>
    )
}