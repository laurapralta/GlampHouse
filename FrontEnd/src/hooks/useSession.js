import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const ContextSession = createContext({});

export function ContextSessionProvider({ children }) {
  const [session, setSession] = useState(() => {
    const session = JSON.parse(localStorage.getItem("@SESSION"));

    if (!session) {
      return null;
    }

    return session;
  });

  function createSession(data) {
    const { jwt } = data;
    const usuario = jwt_decode(jwt);

    console.log("dataSession", data);

    const { id, nombre, rol, apellido, sub } = usuario;

    const user = {
      jwt,
      user: {
        id,
        nombre,
        apellido,
        sub,
        rol,
        fullName: nombre + " " + apellido,
        nameAcronym: nombre.substring(0, 1) + apellido.substring(0, 1),
      },
    };

    localStorage.setItem("@SESSION", JSON.stringify(user));
    setSession(user);
  }

  function deleteSession() {
    localStorage.removeItem("@SESSION");
    setSession(null);
  }

  return (
    <ContextSession.Provider value={{ session, createSession, deleteSession }}>
      {children}
    </ContextSession.Provider>
  );
}

export function useSession() {
  return useContext(ContextSession);
}
