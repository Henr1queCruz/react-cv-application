import Input from './Input';

export default function DateGroup() {
  return (
    <div className="flex gap-4">
      <Input label="Start Date" id="startDate" />
      <Input label="End Date" id="endDate" />
    </div>
  );
}
