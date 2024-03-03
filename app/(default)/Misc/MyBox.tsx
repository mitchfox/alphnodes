import { Box, DefaultProps } from '@mantine/core'

interface MyTableProps extends DefaultProps {
  children: React.ReactNode
}

function MyBox({ children, ...others }: MyTableProps) {
  return (
    <Box
      mx="auto"
      px="lg"
      py="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.sm,
      })}
      {...others}
    >
      {children}
    </Box>
  )
}

export default MyBox
