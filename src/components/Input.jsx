export default function Input({ label, id, ...props }) {
  return (
    <p className="flex flex-col py-2">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-2 py-1 rounded-md bg-gray-200"
        id={id}
        name={id}
        required
        {...props}
      />
    </p>
  );
}
