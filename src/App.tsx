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

      {/* 🎵 Birthday Song Player */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <audio controls autoPlay loop>
          <source src="/happy-birthday.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}
