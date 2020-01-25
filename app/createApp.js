import routerconfig from "./routerconfig";
import createStore from "./redux/store/create";
import { renderRoutes } from "react-router-config";
export default function (store = {}) {
  return {
    router: renderRoutes(routerconfig),
    store: createStore(store),
    routerconfig,
  }

}