import Form from "./Components/Form/Form";
import Image from "./Components/Image";
import MainLayout from "./Layout/mainLayout";


function App() {
  return (
   <MainLayout 
   img={<Image />}
   form={<Form />}
   />
  );
}

export default App;
