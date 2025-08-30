import { BirthdayTemplate } from './components/BirthdayTemplate';
export default function App() {
  return (
    <>
      <BirthdayTemplate
        name="Janvi Ishita Kalisetty"
        date="12th September 2007"
        age={18}
        favoritePerson="Her Mother"
        favoriteColor="Pink"
        hobby="Reading Books"
        favoriteBook="Slaughter House Five"
        authoredBook="Unbreakable Ties"
        fromFriend="Geetha Sukeerthi"
      />
      {/* Removed the default audio player */}
    </>
  );
}
