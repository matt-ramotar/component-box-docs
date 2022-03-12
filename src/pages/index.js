import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import cover from '../../static/img/cover.png'
import Divider from "../components/Divider";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {foundation} from "react-syntax-highlighter/src/styles/hljs";
import {simpleBanner, simpleModal, simpleScreen} from "./snippets";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{
            fontFamily: "Space Grotesk",
            backgroundImage: `url(${cover})`,
            height: 400,
            backgroundPosition: "center"
        }}>
            <div className="container" style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                <h1 className="hero__title"
                    style={{fontFamily: "Space Grotesk", fontSize: 56, color: "#3A7AFF"}}>{siteConfig.title}</h1>
                <p className="hero__subtitle" style={{color: "#ffffff"}}>{siteConfig.tagline}</p>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{
                        borderRadius: 0,
                        padding: 12,
                        backgroundColor: "#3a7aff",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 16
                    }}>
                        <Link
                            to="/docs" style={{color: "#282C34", fontWeight: "bold", fontSize: 24}}>
                            Get Started
                        </Link>
                    </div>

                    <div style={{
                        borderRadius: 0,
                        padding: 12,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Link
                            to="/docs" style={{color: "#3a7aff", fontWeight: "bold", fontSize: 24}}>
                            Take the Tutorial
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <Divider/>

                <div style={{width: '100%', display: 'flex', flexDirection: "row", justifyContent: "center"}}>
                    <div>
                        <SyntaxHighlighter language="kotlin" style={foundation}>
                            {simpleBanner}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div style={{width: '100%', display: 'flex', flexDirection: "row", justifyContent: "center"}}>
                    <div>
                        <SyntaxHighlighter language="kotlin" style={foundation}>
                            {simpleModal}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div style={{width: '100%', display: 'flex', flexDirection: "row", justifyContent: "center"}}>
                    <div>
                        <SyntaxHighlighter language="kotlin" style={foundation}>
                            {simpleScreen}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </main>

            <div style={{
                display: "flex",
                flexDirection: "row",
                width: '100%',
                justifyContent: "center",
                backgroundColor: "#282C34",
                padding: 24
            }}>
                <div style={{
                    borderRadius: 0,
                    padding: 12,
                    backgroundColor: "#3a7aff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16
                }}>
                    <Link
                        to="/docs" style={{color: "#282C34", fontWeight: "bold", fontSize: 24}}>
                        Get Started
                    </Link>
                </div>

                <div style={{
                    borderRadius: 0,
                    padding: 12,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Link
                        to="/docs" style={{color: "#3a7aff", fontWeight: "bold", fontSize: 24}}>
                        Take the Tutorial
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
