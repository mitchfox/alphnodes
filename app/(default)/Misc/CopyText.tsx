import { Button, CopyButton, Tooltip } from '@mantine/core'

function CopyText({ value, label }: { value: string; label?: string }) {
  return (
    <CopyButton value={value} timeout={1000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? 'Copied' : 'Copy'}
          withArrow
          position="right"
          color="indigo"
        >
          <Button variant="subtle" onClick={copy}>
            {label ?? value}
          </Button>
        </Tooltip>
      )}
    </CopyButton>
  )
}

export default CopyText
