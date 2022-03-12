// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Component Box',
    tagline: 'A Kotlin multiplatform library for building dynamic server-driven native UI',
    url: 'https://componentbox.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'dropbox',
    projectName: 'componentbox',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/dropbox/componentbox/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Component Box',
                logo: {
                    alt: 'Component Box',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: 'Docs',
                    },

                    {
                        type: 'doc',
                        docId: 'api',
                        position: 'left',
                        label: 'API',
                    },

                    {
                        href: 'https://github.com/dropbox/componentbox',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/componentbox',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/dropbox',
                            },
                        ],
                    },
                    {
                        title: 'More',
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Dropbox, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                disableSwitch: true
            }
        }),
};

module.exports = config;
