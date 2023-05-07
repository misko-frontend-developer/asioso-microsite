import { ReactNode } from "react";
import { Box, Modal } from "@mantine/core";

interface IFModal {
  onClose: () => void;
  children: ReactNode;
  title: string;
  opened: boolean;
  size?: number | string;
}
const CoreModal = ({ opened, onClose, children, title, size }: IFModal) => {
  return (
    <Modal centered opened={opened} onClose={onClose} title={title} size={size ?? 450}>
      <Box>{children}</Box>
    </Modal>
  );
};

export default CoreModal;
