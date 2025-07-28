import { Drawer } from './Drawer'
import { DrawerBody, DrawerFooter, DrawerTitle } from './DrawerContent'

import DrawerHeader from './DrawerHeader'

const DrawerComponent = Object.assign(Drawer, {
  Header: DrawerHeader,
  Title: DrawerTitle,
  Body: DrawerBody,
  Footer: DrawerFooter,
})

export default DrawerComponent
