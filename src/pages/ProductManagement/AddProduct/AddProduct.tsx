import { useId, useState } from "react";
import FormModel from "../../../components/ui/wrapper/FormModel.tsx";
import useInitialData, {
  IInitialData,
} from "../../../hooks/useInitialData.tsx";
import { INITIAL_DATA } from "../constants.tsx";
import AddProductForm from "./AddProductForm.tsx";
const AddProduct = ({ initialData }: any) => {
 
  const addFormId = useId();
  const { isDataEmpty, initialValues } = useInitialData({
    initialData,
    INITIAL_DATA,
  });
  const handleSubmitForm = (values: IInitialData) => {
    console.log(values);
  };

  return (
    <>
      <FormModel formId={addFormId}>
        <AddProductForm
          handleFormSubmit={handleSubmitForm}
          formId={addFormId}
          isDataEmpty={isDataEmpty}
          initialValues={initialValues}
        />
        {/* <FormWrapper
          handleFormSubmit={(values) => {
            console.log(values);
          }}
          isDataEmpty={isDataEmpty}
          initialValues={{ name: "" }}
          formId={addFormId}
        >
          <>
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                style="border rounded-lg"
                type="text"
                label="Name"
                name="name"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Brand"
                name="brand"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Model"
                name="model"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Operating system"
                name="os"
              />
              <Input
                style="border rounded-lg"
                type="date"
                label="Release Date"
                name="releaseDate"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Quantity"
                name="quantity"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Ram"
                name="ram"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Storage"
                name="storage"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Font-Camera"
                name="fontCamera"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Back-Camera"
                name="backCamera"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Screen"
                name="screenSize"
              />
              <Input
                style="border rounded-lg"
                type="text"
                label="Battery Backup"
                name="batteryBackup"
              />
            </div>
            <label
              htmlFor="textarea-label"
              className="block text-sm mt-4 px-1  mb-1 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="textarea-label"
              name="description"
              className="py-3 border px-4 block w-full border-gray-200 border-opacity-50 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              rows={3}
              placeholder="Write about your product...."
            ></textarea>
          </>
        </FormWrapper> */}
      </FormModel>
    </>
  );
};

export default AddProduct;
