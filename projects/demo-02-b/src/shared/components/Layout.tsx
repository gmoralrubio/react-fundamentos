import { Footer } from '@shared/components/Footer'
import { Header } from '@shared/components/Header'
import type { MenuOptions } from '@App'
import { Logos } from '@shared/components/Logos'
import { Menu } from '@shared/components/Menu'

interface Props {
  readonly appTitle: string
  readonly menuOptions: MenuOptions[]
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  appTitle,
  menuOptions,
  children,
}) => {
  return (
    <div className="container mx-auto max-w-6xl text-black">
      <Header>
        <Logos title={appTitle} />
        <Menu menuOptions={menuOptions} />
      </Header>
      <main className="flex flex-col items-center justify-center gap-4 p-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}
