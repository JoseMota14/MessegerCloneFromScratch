import "./App.css";
import Conversations from "./components/Conversations";
import Sidebar from "./components/Generic/Sidebar";
import Login from "./components/Login";
import Route from "./components/Navigation/Route";
import Users from "./components/Users";
import ToasterContext from "./contexts/ToasterContext";
import { NavigationProvider } from "./contexts/nativation";
import useAuth from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();

  return (
    <div>
      <ToasterContext></ToasterContext>
      {auth ? (
        <NavigationProvider>
          <Sidebar />
          <div>
            <Route path="/conversations">
              <Conversations />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </div>
        </NavigationProvider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
