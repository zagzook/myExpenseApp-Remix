import { Link } from "@remix-run/react";
import homeCSS from "../styles/home.css"

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <main id="content">
    <h1>A better way of keeping track of your notes</h1>
    <p>Try our early beta and never loose track of your notes again!</p>
    <p id="cta">
      <Link to="/notes">Try Now!</Link>
    </p>
  </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeCSS }]
};

