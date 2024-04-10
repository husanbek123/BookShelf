import { HTMLAttributes, useState } from "react";
import { Book } from "../../types/book";
import BookCard from "../BookCard";
import {
  StyledBookSection,
  StyledBookSectionForm,
  StyledBookSectionHeader,
} from "./bookSection.styled";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "../Button/button.styled";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import CustomModal from "../Modal";
import Button from "../Button";
import { Create, Delete, PATCH } from "../../utils/instance";
import useStorage from "../../utils/store";

type Props = {
  data: Book[];
} & HTMLAttributes<HTMLDivElement>;

export default function BookSection({ data }: Props) {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("9781118464481");
  const { userData } = useStorage((data) => data);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [newStatus, setNewStatus] = useState<number>(0);

  return (
    <>
      <CustomModal
        title="Create a book"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createModal}
        close={() => setCreateModal(false)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <StyledBookSectionForm>
          <TextField
            variant="outlined"
            placeholder="ISBN"
            color="secondary"
            label="ISBN"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Box className="modal-buttons">
            <Button
              size="large"
              variant="outlined"
              onClick={() => setCreateModal(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                Create({
                  ...userData,
                  value: inputValue,
                });
                setCreateModal(false);
              }}
            >
              Submit
            </Button>
          </Box>
        </StyledBookSectionForm>
      </CustomModal>
      <CustomModal
        title="Edit a book"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editModal}
        close={() => setEditModal(false)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <StyledBookSectionForm>
          <Select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value as number)}
            color="secondary"
          >
            <MenuItem value={0}>New</MenuItem>
            <MenuItem value={1}>Reading</MenuItem>
            <MenuItem value={2}>Finished</MenuItem>
          </Select>
          <Box className="modal-buttons">
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                setEditModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                PATCH({
                  ...userData,
                  ...selectedBook?.book,
                  newStatus,
                });
                setEditModal(false);
              }}
            >
              Submit
            </Button>
          </Box>
        </StyledBookSectionForm>
      </CustomModal>
      <div>
        <StyledBookSectionHeader>
          <div>
            <h1>
              You've got <span>{data ? data.length : 0}</span> books
            </h1>
            <p>Your books today</p>
          </div>
          <div>
            <StyledButton
              size="large"
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
              onClick={() => setCreateModal(true)}
            >
              Create a Book
            </StyledButton>
          </div>
        </StyledBookSectionHeader>
        <StyledBookSection>
          {data &&
            data?.map((book) => (
              <BookCard
                onEdit={() => {
                  setEditModal(true);
                  setSelectedBook(book);
                  setNewStatus(book.status);
                }}
                onDelete={() =>
                  Delete({
                    id: book.book.id,
                    key: userData.key,
                    secret: userData.secret,
                  })
                }
                key={book.book.id}
                {...book}
              />
            ))}
        </StyledBookSection>
      </div>
    </>
  );
}
