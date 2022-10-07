import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import { FilterResults } from "../pages/FilterResults/filterResults";
import { Home } from "../pages/Home/Home";
import { Todos } from "../pages/Todos/Todos";
import { Register } from "../pages/Register/registrer";
import { Login } from "../pages/Login/login";
import { Product } from "../pages/Product/product";
import { Reservas } from "../pages/Reservas/reservas";
import { ReservasUsuarios } from "../pages/ReservasUsuarios/reservasUsuarios";
import { NotFound } from "../pages/NotFound/notFound";
import { useSession } from "../hooks/useSession";
import { Admin } from '../pages/Admin/admin';
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { session } = useSession();
  const location = useLocation();

  return session?.user ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      state={{
        from: location,
        message: "Para acceder a la página es obligatorio iniciar sesión.",
      }}
      replace
    />
  );
}

function AdminRoute({ children }) {
  const { session } = useSession();

  return session?.user ? (
      children )
    : (
      <Navigate
        to={'/'}
        replace
      />
    );
}

function BlockRoute({ children }) {
  const { session } = useSession();
  const location = useLocation();

  return !session?.user ? (
    children
  ) : (
    <Navigate to={location.state ? location.state.from.pathname : "/"} />
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos/>} />

          <Route path="/listar" element={<FilterResults />} />{" "}
          {/* todos los productos */}
          <Route
            path="/listar/ciudades/:cityId/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por ciudades */}
          <Route
            path="/listar/categoria/:categoryId/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por categoria */}
          <Route
            path="/listar/ciudades/:cityId/categoria/:categoryId/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por ciudades y categoria */}
          <Route
            path="/listar/ciudades/:cityId/:dateIn/:dateOut/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por ciudades y fecha de disponibilidad */}
          <Route
            path="/listar/ciudades/:cityId/categoria/:categoryId/:dateIn/:dateOut/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por ciudades, categoria y fecha de disponibilidad  */}
          <Route
            path="/listar/categoria/:categoryId/:dateIn/:dateOut/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por categoria y fecha de disponibilidad  */}
          <Route
            path="/listar/fechas/:dateIn/:dateOut/"
            exact
            element={<FilterResults />}
          />{" "}
          {/* productos por fecha de disponibilidad  */}
          <Route path="/producto/:id" element={<Product />} />
          <Route
            path="/login"
            element={
              <BlockRoute>
                <Login />
              </BlockRoute>
            }
          />
          <Route
            path="/register"
            element={
              <BlockRoute>
                <Register />
              </BlockRoute>
            }
          />
          <Route
            path="/reservas/:id"
            element={
              <PrivateRoute>
                <Reservas />
              </PrivateRoute>
            }
          />
          <Route
            path="/misReservas/:id"
            element={
              <PrivateRoute>
                <ReservasUsuarios />
              </PrivateRoute>
            }
          />
          <Route 
          path="/administrador/:id" 
          element={
            <AdminRoute>
              <Admin/>
            </AdminRoute>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
