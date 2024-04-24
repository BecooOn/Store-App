import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
