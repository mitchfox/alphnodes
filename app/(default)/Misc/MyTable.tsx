import {
  MantineNumberSize,
  SpacingValue,
  SystemProp,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core'
import MyBox from './MyBox'

function Caption({ caption }: { caption: string }) {
  const theme = useMantineTheme()
  return (
    <Text
      fw="bold"
      c={
        theme.colorScheme === 'dark'
          ? theme.colors.gray[0]
          : theme.colors.dark[8]
      }
    >
      {caption}
    </Text>
  )
}

interface MyTableProps {
  w?: SystemProp<SpacingValue> | undefined
  px?: SystemProp<SpacingValue> | undefined
  py?: SystemProp<SpacingValue> | undefined
  horizontalSpacing?: MantineNumberSize
  verticalSpacing?: MantineNumberSize
  data: { [key: string]: string | React.ReactNode }
}

function MyTable({
  w,
  px,
  py,
  data,
  horizontalSpacing,
  verticalSpacing,
}: MyTableProps) {
  const rows = Object.entries(data).map(([key, value]) => (
    <tr key={key}>
      <td width={'30%'}>
        <Caption caption={key}></Caption>
      </td>
      <td width={'70%'}>{value}</td>
    </tr>
  ))

  return (
    <MyBox w={w} mx="auto" px={px ?? 'lg'} py={py ?? 'lg'} ta="center">
      <Table
        horizontalSpacing={horizontalSpacing ?? 'xs'}
        verticalSpacing={verticalSpacing ?? 'xl'}
        fontSize={'md'}
        withColumnBorders
      >
        <tbody>{rows}</tbody>
      </Table>
    </MyBox>
  )
}

export default MyTable
