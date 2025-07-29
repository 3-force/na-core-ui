import { Modal } from './Modal'
import { ModalBody, ModalFooter, ModalTitle } from './ModalContent'
import ModalHeader from './ModalHeader'

const ModalComponent = Object.assign(Modal, {
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
})

export default ModalComponent
