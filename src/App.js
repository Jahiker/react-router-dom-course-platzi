import { HashRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, AuthRoute } from "./auth";

import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { NotFound } from "./NotFound";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/logout" 
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
