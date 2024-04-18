// ------------packages-----------

// ------------files-----------
import Router from "./router/Router";
import { SearchContaxt } from "./contaxt/SearchContaxt";
import "./App.css";
import { CookiesProvider } from "react-cookie";

export default function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <SearchContaxt>
        <Router />
      </SearchContaxt>
    </CookiesProvider>
  );
}
