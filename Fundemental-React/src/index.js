import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./book";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          const { id } = book;
          return <Book {...book} key={id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
