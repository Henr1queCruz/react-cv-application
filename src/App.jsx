import Curriculum from './components/Curriculum';
import DateGroup from './components/DateGroup';
import FormSection from './components/FormSection';
import Input from './components/Input';
export default function App() {
  return (
    <main className="box-border min-h-screen bg-gradient-to-b from-gray-400 to-gray-300 flex justify-center gap-36 px-6 py-8">
      <div className="flex flex-col gap-4">
        <FormSection title="Personal Information">
          <Input label="Full Name" id="fullName" />
          <Input label="Email" id="email" />
          <Input label="Phone number" id="phoneNumber" />
          <Input label="Address" id="address" />
        </FormSection>
        <FormSection title="Education">
          <Input label="School" id="school" />
          <Input label="Degree" id="degree" />
          <DateGroup />
          <Input label="Location" id="location" />
        </FormSection>
        <FormSection title="Work Experience">
          <Input label="Company Name" id="companyName" />
          <Input label="Position Title" id="positionTitle" />
          <DateGroup />
          <Input label="Location" id="location" />
          <Input label="Description" id="description" />
        </FormSection>
      </div>
      <div className="bg-stone-50 min-h-80 min-w-[790px]">
        <Curriculum />
      </div>
    </main>
  );
}
