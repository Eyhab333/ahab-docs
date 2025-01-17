import { useRouter } from 'next/router';

export default {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        AHAB
      </span>
    </>
  )  
  ,
  project: {
    link: 'https://github.com/Eyhab333/ahab-docs'
  }
  ,
  docsRepositoryBase: 'https://github.com/Eyhab333/ahab-docs'
  ,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – AHAB'
      }
    }
  }
  ,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ahab docs" />
      <meta property="og:description" content="Documentation for my projects and a reference to help me and others" />
      <link rel="icon" href="/favicon-32x32.png" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" />
    </>
  )
  ,
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
  ]
  ,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
        <span>   </span>
        <span>
          Credits to <a href="https://programmingadvices.com" target="_blank" rel="noopener noreferrer">
          Dr. Mohammed Abu-Hadhoud
          </a>
        </span>
      </span>
      
    )
  }
  ,
  chat: {
    link: 'https://x.com/Ihab409',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  }
}