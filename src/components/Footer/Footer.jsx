import { Container, Group, ActionIcon, rem } from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"
import Logo from "../../assets/icons/logo.png"
import classes from "./FooterSocial.module.css"

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={Logo} size={28} alt="logo" />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
