import { useState } from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";

export default function Calculator() {
  const [openMenu, setOpenMenu] = useState(false);

  const openDrawer = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  return (
    <>
      <AppBar openMenu={openMenu} setMenuOpen={openDrawer} />
      {/* <Drawer openMenu={openMenu} /> */}
    </>
  );
}
