import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuran,
    faDatabase
} from '@fortawesome/free-solid-svg-icons';

export default function WebDevProjects() {
    return (
        <div className="page">
            <h1>Web Dev</h1>
            <p>
                Projects I'm proud of:
            </p>
            <section className="links">
                <a href="https://masyi-app.web.app/">
                    <FontAwesomeIcon icon={faQuran} />
                </a>
            </section>
        </div>
    )
}