import React from "react";

export default function PageComponent({ title, buttons = "", children }) {
  return (
    <>
      <header className="header">
        <div className="header1">
          <h1 className="h1">{title}</h1>
          {buttons}
        </div>
      </header>
      <main>
        <div className="main">{children}</div>
      </main>
    </>
  );
}
