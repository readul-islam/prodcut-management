import { ConnectedFocusError } from "focus-formik-error";
import { Form, Formik } from "formik";
import { FC, FormEventHandler, ReactElement } from "react";

interface IProps {
  initialValues: any;
  handleFormSubmit: FormEventHandler;
  isDataEmpty: boolean;
  formId: string;
  children: ReactElement;
}

const FormWrapper: FC<IProps> = ({
  initialValues,
  handleFormSubmit,
  isDataEmpty,
  formId,
  children,
}) => {
  console.log(children)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      enableReinitialize={isDataEmpty}
      // validationSchema={{}}
    >
      {({ handleSubmit, isSubmitting, setFieldValue }) => (
        <Form  id={formId} autoComplete="off" onSubmit={handleSubmit}>
          <ConnectedFocusError />
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
