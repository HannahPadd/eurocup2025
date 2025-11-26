import Logo from "../../assets/icon.png";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  return (
    <nav className="w-full h-16 navbar-bg">
      <div className="lg:container lg:mx-auto mx-3 flex flex-row gap-10 items-center h-full">
        <img src={Logo} alt="logo" className="h-12 w-12 rounded-lg" />
        <h2 className="text-white font-bold text-xl">
          TagTeamTournament Standings
        </h2>
        <div className="ml-auto flex items-center">
          <label htmlFor="theme-select" className="text-white mr-2">
            Theme:
          </label>
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-gray-800 text-white px-2 py-1 rounded"
          >
            <option value="TagTeam">TagTeam</option>
            <option value="Eurocup">Eurocup</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
