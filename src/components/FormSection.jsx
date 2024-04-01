export default function FormSection({ title, children }) {
  return (
    <form className="bg-stone-50 px-4 py-5 rounded-lg flex flex-col">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      {children}
    </form>
  );
}
