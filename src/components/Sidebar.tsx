import { useState } from "react";
import "./ComponentStyles.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <div id="sidebar" className={collapsed ? "collapsed" : ""}>
        <div>NEW NOTES</div>
      </div>
      <button id="toggle-button" onClick={() => setCollapsed(!collapsed)}>
        Toggle Sidebar
      </button>
    </div>
  )
}

export default Sidebar;