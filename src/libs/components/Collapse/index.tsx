import { Collapse } from './Collapse'
import { CollapseContent } from './CollapseContent'
import { CollapseTrigger } from './CollapseTrigger'

const CollapseComponent = Object.assign(Collapse, {
  Trigger: CollapseTrigger,
  Content: CollapseContent,
})

export default CollapseComponent
