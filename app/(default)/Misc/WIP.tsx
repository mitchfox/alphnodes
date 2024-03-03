import { createStyles, Title, Container, rem, Box } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: '5rem',
    paddingBottom: rem(120),
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
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

export function WIP() {
  const { classes } = useStyles()

  return (
    <Box maw={rem('70%')} mx="auto" mt={rem('15%')}>
      <div className={classes.root}>
        <Container>
          <div className={classes.label}>WIP</div>
          <Title className={classes.title}>We are working on it...</Title>
          {/* <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text> */}
        </Container>
      </div>
    </Box>
  )
}
