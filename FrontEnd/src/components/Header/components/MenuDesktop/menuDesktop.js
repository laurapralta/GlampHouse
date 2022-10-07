import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserProfile } from "../UserProfile/userProfile";
import { useSession } from "../../../../hooks/useSession";
import { AiOutlinePoweroff } from "react-icons/ai";
import styled from "./styles.module.scss";

export function MenuDesktop() {
  const { session, deleteSession } = useSession();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function clearSession() {
    deleteSession();
    navigate("/login");
  }

  const getButtonsView = {
    "/login": (
      <>
        <Link to="/register">Crear cuenta</Link>
      </>
    ),
    "/register": (
      <>
        <Link to="/login">Iniciar sesión</Link>
      </>
    ),
    default: (
      <>
        <>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/register">Crear cuenta</Link>
        </>
      </>
    ),
  };

  const getActionsUser = {
    ADMIN: (
      <>
        <Link to={`/Administrador/${session?.user?.id}`}>
          <div className={styled.reservations}>
            <button>Administrador</button>
          </div>
        </Link>
        <UserProfile bgColor="bg-secondary" textColor="text-ligth" />
        <button className={styled.logout} type="button" onClick={clearSession}>
          <AiOutlinePoweroff />
        </button>
      </>
    ),
    USER: (
      <>
        <Link to={`/misReservas/${session?.user?.id}`}>
          <div className={styled.reservations}>
            <button>Mis reservas</button>
          </div>
        </Link>
        <UserProfile bgColor="bg-secondary" textColor="text-ligth" />
        <button className={styled.logout} type="button" onClick={clearSession}>
          <AiOutlinePoweroff />
        </button>
      </>
    ),
  };

  return (
    <div className={styled.container}>
      {session ? (
        <>{getActionsUser[session.user.rol[0].name]}</>
      ) : (
        <>
          <div className={styled.box_button}>
            {getButtonsView[pathname] || getButtonsView["default"]}
          </div>
        </>
      )}
    </div>
  );
}
