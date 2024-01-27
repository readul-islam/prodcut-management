import { ConnectedFocusError } from "focus-formik-error";
import { Form, Formik } from "formik";
import { FC } from "react";
import Input from "../../../components/ui/Input";

interface IProps {
  formId: string;
  initialValues: any;
  isDataEmpty: any;
  handleFormSubmit: any;
}

const AddProductForm: FC<IProps> = ({
  formId,
  initialValues,
  isDataEmpty,
  handleFormSubmit,
}) => {
  
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        enableReinitialize={isDataEmpty}
        // validationSchema={{}}
      >
        {({ handleSubmit,  setFieldValue }) => (
          <Form id={formId} autoComplete="off" onSubmit={handleSubmit}>
            <ConnectedFocusError />
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
              onChange={(e) => setFieldValue("description", e.target.value)}
              id="textarea-label"
              name="description"
              className="py-3 border px-4 block w-full border-gray-200 border-opacity-50 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              rows={3}
              placeholder="Write about your product...."
            ></textarea>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProductForm;
