'use client'

import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>About Me</h1>
                <p>A passionate developer focused on technology and innovation.</p>
            </div>
            <div style={styles.bio}>
                <p>
                    Hi, I'm Quentin, a front-end and back-end developer specializing in React, TypeScript, and Node.js.
                    I have a passion for creating elegant and functional solutions that enhance the user experience.
                    My journey has helped me develop diverse skills, ranging from UI design to database management.
                </p>
                <p>
                    Currently a third-year student at Epitech, I aim to continue growing by developing web and mobile applications.
                    I love working on projects that push me out of my comfort zone and allow me to explore new technologies.
                </p>
            </div>
            <div style={styles.skills}>
                <h2>Skills</h2>
                <ul>
                    <li><strong>Front-End Development</strong>: React, TypeScript, HTML, CSS, Redux, Next.js</li>
                    <li><strong>Back-End Development</strong>: Node.js, Express, MongoDB, SQL</li>
                    <li><strong>Tools</strong>: Git, Docker, CI/CD, Jest</li>
                    <li><strong>Languages</strong>: French (native), English (fluent)</li>
                </ul>
            </div>
            <div style={styles.goals}>
                <h2>Professional Goals</h2>
                <p>
                    My goal is to join a dynamic team where I can contribute to innovative projects while continuing to learn and grow in a stimulating environment. I am particularly interested in UX/UI design and application performance.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    bio: {
        marginBottom: '40px',
        fontSize: '18px',
        lineHeight: '1.6',
    },
    skills: {
        marginBottom: '40px',
    },
    goals: {
        marginBottom: '40px',
    },
};

export default AboutMe;
