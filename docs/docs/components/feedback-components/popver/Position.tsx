import { Button, Popover } from '@regen-design/components'
import './position.css'
export default function Demo() {
  return (
    <div className="popover-grid">
      <Popover content={'Top Start'} placement={'top-start'}>
        <Button
          style={{
            gridArea: `1 / 1 / 2 / 2`,
          }}
        >
          Top Start
        </Button>
      </Popover>
      <Popover content={'Top Center'} placement={'top'}>
        <Button
          style={{
            gridArea: `1 / 2 / 2 / 3`,
          }}
        >
          Top Center
        </Button>
      </Popover>
      <Popover content={'Top End'} placement={'top-end'}>
        <Button
          style={{
            gridArea: `1 / 3 / 2 / 4`,
          }}
        >
          Top End
        </Button>
      </Popover>
      <Popover content={'Left Start'} placement={'left-start'}>
        <Button
          style={{
            gridArea: `2 / 1 / 3 / 2`,
          }}
        >
          Left Start
        </Button>
      </Popover>
      <Popover content={'Left Center'} placement={'left'}>
        <Button
          style={{
            gridArea: `3 / 1 / 4 / 2`,
          }}
        >
          Left Center
        </Button>
      </Popover>
      <Popover content={'Left End'} placement={'left-end'}>
        <Button
          style={{
            gridArea: `4 / 1 / 5 / 2`,
          }}
        >
          Left End
        </Button>
      </Popover>
      <Popover content={'Right Start'} placement={'right-start'}>
        <Button
          style={{
            gridArea: `2 / 4 / 3 / 3`,
          }}
        >
          Right Start
        </Button>
      </Popover>
      <Popover content={'Right Center'} placement={'right'}>
        <Button
          style={{
            gridArea: `3 / 4 / 4 / 3`,
          }}
        >
          Right Center
        </Button>
      </Popover>
      <Popover content={'Right End'} placement={'right-end'}>
        <Button
          style={{
            gridArea: `4 / 4 / 4 / 3`,
          }}
        >
          Right End
        </Button>
      </Popover>
      <Popover content={'Bottom Start'} placement={'bottom-start'}>
        <Button
          style={{
            gridArea: `5 / 1 / 5 / 2`,
          }}
        >
          Bottom Start
        </Button>
      </Popover>
      <Popover content={'Bottom Center'} placement={'bottom'}>
        <Button
          style={{
            gridArea: `5 / 2 / 5 / 3`,
          }}
        >
          Bottom Center
        </Button>
      </Popover>
      <Popover content={'Bottom End'} placement={'bottom-end'}>
        <Button
          style={{
            gridArea: `5 / 3 / 5 / 4`,
          }}
        >
          Bottom End
        </Button>
      </Popover>
    </div>
  )
}
