import AdminLayout from "layouts/Admin.js";

function App() {
  return (
    <div className="App">
        <AdminLayout/>
        <Redirect from="/" to="/admin/dashboard" />
    </div>
  );
}

export default App;
