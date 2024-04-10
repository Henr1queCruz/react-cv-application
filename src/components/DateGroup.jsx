import Input from './Input';

export default function DateGroup({ handleDateChange }) {
  return (
    <div className="flex justify-between">
      <Input
        label="Start Date"
        id="startDate"
        type="date"
        onChangeInput={handleDateChange}
      />
      <Input
        label="End Date"
        id="endDate"
        type="date"
        onChangeInput={handleDateChange}
      />
    </div>
  );
}
