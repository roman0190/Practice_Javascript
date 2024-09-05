import "./globals.css";
import { AuthProvider } from "./ImagePro/context/AuthContext";
import PublicRoutes from "./Routes/PublicRoutes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PublicRoutes>
            {children}
          </PublicRoutes>
        </AuthProvider>
      </body>
    </html>
  );
}