import Backendless from "backendless";
export default async function ({ redirect, route, store }) {
  try {
    const currentUser = await Backendless.UserService.getCurrentUser();
    store.commit("set_current_user_in_middleware", currentUser);
    const currentPath = route.path;

    if (currentUser == null) {
      // When the current path is '/', the app should not do another redirect
      if (currentPath !== "/") redirect("/");
    } else if (currentPath === "/") {
      // If the currentUser is not null then redirect user to home page
      redirect("/home");
    }
  } catch (err) {
    // If any error happens, then make the user to logout and start over.
    Backendless.UserService.logout();
  }
}
