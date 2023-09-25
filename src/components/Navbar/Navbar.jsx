import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Anchor,
  Indicator,
} from "@mantine/core";
import CartWidget from "./CartWidget/CartWidget";
import "./styles.css";
import Logo from '../../assets/icons/logo.png';
import { Link } from "react-router-dom";


const LogoNavbar = () => <Link to="/"><img src={Logo} alt="logo"/></Link>

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
  },

  links: {
    width: 260,
  },

  cart: {
    width: 260,
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: 12,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
  logo: {
    width: 10,
    height: 10
  }
}));

function Navbar() {
  const { classes, cx } = useStyles();

  

  return (
    <Header className="navbar" height={56} >
      <Container className={classes.inner}>
        <Group className={classes.links} spacing={5}>
          <ul>
            <li>
              <Anchor component={Link} to="/">Inicio</Anchor>
            </li>
            <li>
              <Anchor  component={Link} to="/category/mujer">Mujer</Anchor>
            </li>
            <li>
              <Anchor  component={Link} to="/category/hombre">Hombre</Anchor>
            </li>
          </ul>
        </Group>

        <LogoNavbar className={classes.logo}  />

        <Group spacing={0} className={classes.cart} position="right" noWrap>
          <ActionIcon size="lg">
            <Group position="center">
              <Indicator inline label="5" size={15}>
                <CartWidget />
              </Indicator>
            </Group>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;
