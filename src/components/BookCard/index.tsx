import { IconButton } from "@mui/material";
import { Book } from "../../types/book";
import Status from "../Status";
import { StyledBookCard, StyledBookCardPanel } from "./bookCard.styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
type Props = {
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
} & Book;

export default function BookCard({ book, status, onDelete, onEdit }: Props) {

  return (
    <StyledBookCard>
      <StyledBookCardPanel className="book-card__panel">
        <IconButton onClick={onDelete}>
          <DeleteForeverIcon color="error" />
        </IconButton>
        <IconButton onClick={onEdit}>
          <EditIcon color="primary" />
        </IconButton>
      </StyledBookCardPanel>
      <h3>
        Harry Potter {book.title} {book.id}
      </h3>
      <ul>
        <li>Cover: </li>
        <li>Pages: </li>
        <li>Published: </li>
        <li>Isbn: {book.isbn}</li>
      </ul>
      <div>
        <p>Joanna Ketlin Rouling</p>
        <Status statusNumber={status} />
      </div>
    </StyledBookCard>
  );
}
