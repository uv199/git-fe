// ------------packages-----------

// ------------files-----------
import Router from "./router/Router";
import { SearchContaxt } from "./contaxt/SearchContaxt";
import "./App.css";

export default function App() {
  return (
    <SearchContaxt>
      <Router />
    </SearchContaxt>
  );
}
