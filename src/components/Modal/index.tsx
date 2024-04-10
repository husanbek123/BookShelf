import { Box, IconButton, Modal } from "@mui/material";
import { ModalProps } from "@mui/material";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";



export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #0000006e;
  border-radius: 12px;
  box-shadow: 24px;
  color: black;
  padding: 12px 20px 20px;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
`;

type Props = {
  title: string;
  close: () => void
} & ModalProps;

export default function CustomModal({ title, children, close, ...props }: Props) {
  return (
    <div>
      <Modal {...props} onClose={close}>
        <StyledModalBox>
          <Box className="modal-header">
            <h3>{title}</h3>
            <IconButton
              sx={{
                padding: "0",
                color: "black",
              }}
              onClick={close}
            >
              <HighlightOffIcon />
            </IconButton>
          </Box>
          {children}
        </StyledModalBox>
      </Modal>
    </div>
  );
}
