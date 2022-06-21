/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        @media (max-width: 768px) {
          justify-content: center;
        }
      `}
    >
      {notes.map((item) => (
        <NoteItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default NotesList;
