import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Codersbite</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link"
        
        onClick={() => (console.log('push'))}>
          <i className="fa fa-home"></i>
          <a>Reportes</a>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <a href="#">Productos</a>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <a href="#">Proveedores</a>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <a href="#">Configuracion</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
