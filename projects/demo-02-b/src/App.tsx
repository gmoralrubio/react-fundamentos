import { Counter } from '@features/Counter/Counter'
import { Layout } from '@shared/components/Layout'
import { PanicButton } from '@features/PanicButton/PanicButton'

export interface MenuOptions {
  label: string
  path: string
}

const App: React.FC = () => {
  const menuOptions: MenuOptions[] = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <Layout
      appTitle={'React App'}
      menuOptions={menuOptions}
    >
      <Counter />
      <PanicButton />
    </Layout>
  )
}

export default App
