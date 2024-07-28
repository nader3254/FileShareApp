
import { Connect } from "./panels/Connect";
import { Home } from "./panels/Home";
import { Setting } from "./panels/Setting";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/connect',
    element: <Connect/>
  },
  {
    path: '/setting',
    element: <Setting/>
  }
];

export default AppRoutes;
