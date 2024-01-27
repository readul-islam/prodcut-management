import ProductManagement from "../../pages/ProductManagement";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";

const MainLayout = () => {
  return (
    <div className="bg-gray-50   dark:bg-slate-900">
      {/* <!-- ========== HEADER ========== --> */}
      <Header />
      {/* <!-- ========== END HEADER ========== --> */}

      {/* <!-- ========== MAIN CONTENT ========== --> */}
      {/* <!-- Sidebar Toggle --> */}
      <SidebarToggle />
      {/* <!-- End Sidebar Toggle --> */}

      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End Sidebar --> */}

      {/* <!-- Content --> */}
      <div className="w-full  h-[calc(100vh-71px)] overflow-auto pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <ProductManagement />
      </div>
      {/* <!-- End Content --> */}
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div>
  );
};

export default MainLayout;
