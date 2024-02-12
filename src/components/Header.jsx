import appLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={appLogo} alt="Quiz web app logo" />
      <h1>React Quiz App</h1>
    </header>
  );
}
