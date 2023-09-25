import { MantineProvider, Affix, rem, Button, Transition } from "@mantine/core"
import { IconArrowUp } from "@tabler/icons-react"
import { useWindowScroll } from "@mantine/hooks"
import Navbar from "../Navbar/Navbar"
import { Notifications } from "@mantine/notifications"

function Layout({ children }) {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          primaryColor: "cyan",
          primaryShade: 6,
          components: { Anchor: { defaultProps: { underline: false } } },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <main>
          <Navbar />
          {children}
        </main>
      </MantineProvider>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color="cyan"
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Ir arriba
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  )
}

export default Layout
