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
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../../api/createUser";
import useUserStore from "../../../stores/userStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
}

export const NamePrompt: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const toast = useToast();

  const { mutateAsync, isLoading } = useCreateUser();

  const setUser = useUserStore((state) => state.setUser);

  const handleConfirm = handleSubmit(async (data) => {
    try {
      await mutateAsync({ username: data.name });
      setUser(data.name);
      onClose();
    } catch (_) {
      toast({
        status: "error",
        description: "Something went wrong",
      });
    }
  });

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => null} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Give your name</ModalHeader>
        <ModalBody as={VStack} spacing="8" align="stretch">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              {...register("name", { required: true })}
              onKeyUp={handleKeyUp}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button isLoading={isLoading} onClick={handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
