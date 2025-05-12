import { Field } from "formik"


const TextField = ({
  field,
  label_text,
  placeholder = "",
  type = "text",
  isDisabled = false,
  Icon,
  className = "",
  onChange // allow custom onChange
}) => {
  return (
    <div className="mb-4">
      {label_text && (
        <label htmlFor={field} className="block mb-1 text-sm font-medium text-gray-700">
          {label_text}
        </label>
      )}
      <Field name={field}>
        {({ field: formikField, meta }) => (
          <div className="relative">
            {Icon && (
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            )}

            {type === "textarea" ? (
              <textarea
                {...formikField}
                id={formikField.name}
                disabled={isDisabled}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none resize-none  ${Icon ? "pl-10" : ""}
                ${isDisabled ? "bg-gray-100 cursor-not-allowed" : ""}
                ${meta.touched && meta.error ? "border-red-400" : "border-gray-200"}
                ${meta.touched && !meta.error ? "border-green-400" : ""}
                ${className}`
              }
                rows={5}
              />
            )
              :
              (
                <input
                  {...formikField}
                  id={formikField.name}
                  type={type}
                  disabled={isDisabled}
                  placeholder={placeholder}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (onChange) {
                      const result = onChange(e);
                      // only use result if it's a string or number
                      if (typeof result === 'string' || typeof result === 'number') {
                        value = result;
                      }
                    }

                    formikField.onChange({
                      target: {
                        name: formikField.name,
                        value
                      }
                    });
                  }}

                  className={`w-full px-3 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 
                outline-none border-2 focus:border-gray-300 transition-all
                ${Icon ? "pl-10" : ""}
                ${isDisabled ? "bg-gray-100 cursor-not-allowed" : ""}
                ${meta.touched && meta.error ? "border-red-400" : "border-gray-200"}
                ${meta.touched && !meta.error ? "border-green-400" : ""}
                ${className}`}
                />
              )}
            {meta.touched && meta.error && (
              <p className="error-message mt-1 text-xs">{meta.error}</p>
            )}
            {/* {meta.touched && !meta.error && (
              <p className="success-message mt-1 text-xs">Looks good!</p>
            )} */}
          </div>
        )}
      </Field>
    </div>
  );
};

export default TextField

