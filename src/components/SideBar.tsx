import { Button } from "./Button";

interface IGenre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: IGenre[];
  selectedGenreId: number;
  onSelectGenre: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, onSelectGenre }: SideBarProps) {
  // Complete aqui
  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onSelectGenre(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )

}