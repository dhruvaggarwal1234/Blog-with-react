


function App() {
  
 const app  = import.meta.env.VITE_APPWRITE_URL;
  return (
    <>
 <div>Blog App with this is my url {app} React</div>
    </>
  )
}

export default App
