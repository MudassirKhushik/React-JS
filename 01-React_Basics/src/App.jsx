import New_fun from "./New_fun"

function App() {

  return (
    // You can only export one element, either wrap it in a div or just return one element.
    // Because of this here comes the concept of fragment (<> </>).
    <>
    <New_fun/>
    <div>This is a div element</div>
    <h1>This is a h1 tag element</h1>
    <p>Here is a paragraph</p>
    </>
  )
}

export default App