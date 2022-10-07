import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SocialNetworks } from "../../../SocialNetworks/SocialNetworks";
import { UserProfile } from "../UserProfile/userProfile";
import { useMenuMobile } from "../../../../hooks/useMenuMobile";
import { useSession } from "../../../../hooks/useSession";
import styled from "./styles.module.scss";

export function MenuMobile() {
  const { statusMenu, setStatusMenu } = useMenuMobile(false);
  const { pathname } = useLocation();
  const { session, deleteSession } = useSession();
  const navigate = useNavigate();

  function clearSession() {
    deleteSession();
    setStatusMenu(false);
    navigate("/login");
  }

  const getButtonsView = {
    "/login": (
      <>
        <Link to="/register" onClick={() => setStatusMenu(false)}>
          Crear cuenta
        </Link>
      </>
    ),
    "/register": (
      <>
        <Link to="/login" onClick={() => setStatusMenu(false)}>
          Iniciar sesión
        </Link>
      </>
    ),
    default: (
      <>
        <Link to="/login" onClick={() => setStatusMenu(false)}>
          Iniciar sesión
        </Link>
        <Link to="/register" onClick={() => setStatusMenu(false)}>
          Crear cuenta
        </Link>
      </>
    ),
  };

  return (
    <div className={statusMenu ? styled.open : styled.close}>
      <div className={`${styled.nav}`}>
        <header>
          <div>
            <button onClick={() => setStatusMenu(false)} type="button">
              <IoMdClose size={27} color="#ffffff" />
            </button>
          </div>
          {session?.user ? (
            <UserProfile bgColor="bg-light" textColor="text-white" />
          ) : (
            <>{getButtonsView[pathname] || getButtonsView["default"]}</>
          )}
        </header>
        <footer>
          <SocialNetworks color="#D84A8D" />
        </footer>
      </div>
    </div>
  );
}
