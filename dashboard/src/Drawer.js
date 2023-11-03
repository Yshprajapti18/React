import { React } from "react";

export default function Drawer({ openMenu, setMenuOpen }) {
  if (openMenu) {
    return (
      <>
        <h1>hello</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>not hello</h1>
      </>
    );
  }
}
