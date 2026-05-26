import type { SocialsData } from './socials.type'

// Tipado de Componente react

const SOCIALS: SocialsData[] = [
  {
    name: 'Vite',
    url: 'https://vite.dev/',
    iconUrl: '/icons.svg#social-icon',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vitejs/vite',
    iconUrl: '/icons.svg#github-icon',
  },
  {
    name: 'Discord',
    url: 'https://x.com/vite_js',
    iconUrl: '/icons.svg#discord-icon',
  },
]

export const Socials: React.FC = () => {
  return (
    <div id="social">
      <svg
        className="icon"
        role="presentation"
        aria-hidden="true"
      >
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with us</h2>
      <p>Join the Vite community</p>
      <ul>
        {SOCIALS.map(({ name, url, iconUrl }) => {
          return (
            <li key={name}>
              <a
                href={url}
                target="_blank"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={iconUrl}></use>
                </svg>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
