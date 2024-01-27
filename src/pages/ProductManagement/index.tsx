import Table from "../../components/Table";
import CheckedDropdown from "../../components/ui/CheckedDropdown";
import AddProduct from "./AddProduct/AddProduct";

const ProductManagement = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <CheckedDropdown />
        <button
          type="button"
          className="py-3 px-4  gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-danger-alert"
        >
          Add Product
        </button>
      </div>

      <Table />
      <AddProduct />
    </>
  );
};

export default ProductManagement;
