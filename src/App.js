import CardWrap from "./components/CardWrap";
import MyFrontendMentorFooter from "./components/MyFrontendMentorFooter";

function App() {
  const firstName = (name) => {
    const fName = name.substring(0, name.indexOf(" ")).toLowerCase();
    console.log(fName);
    return fName;
  }

  return (
    <div className='App'>
      <CardWrap firstName={firstName}/>
      <MyFrontendMentorFooter />
    </div>
  );
}

export default App;
