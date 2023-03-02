import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FillInInputSection from "./FillInInputSection";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FillInModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Fill in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={VStack} spacing="8" align="stretch">
          <FillInInputSection category="Yesterday" />
          <FillInInputSection category="Today" />
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
