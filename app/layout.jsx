import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "PromptYa",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <Analytics />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
