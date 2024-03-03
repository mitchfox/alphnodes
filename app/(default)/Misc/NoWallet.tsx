import { createStyles, Title, Container, rem, Box } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(120),
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(150),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
  },
}))

export function NoWallet() {
  const { classes } = useStyles()

  return (
    <Box maw={rem('70%')} mx="auto" mt={rem('15%')}>
      <div className={classes.root}>
        <Container>
          <div className={classes.label}>No Wallet</div>
          <Title className={classes.title}>Please connect your wallet</Title>
        </Container>
      </div>
    </Box>
  )
}
