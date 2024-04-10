import {
  faBriefcase,
  faGraduationCap,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Curriculum from './components/Curriculum';
import DateGroup from './components/DateGroup';
import FormSection from './components/FormSection';
import Input from './components/Input';

export default function App() {
  const [showUserInfForm, setShowUserInfForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkExpForm, setShowWorkExpForm] = useState(false);

  const [form, setForm] = useState({
    personalInf: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
    education: {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    },
    experience: {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
  });

  function handlePersonalInfChange(e, inputValue) {
    setForm((prevState) => ({
      ...prevState,
      personalInf: {
        ...prevState.personalInf,
        [inputValue]: e.target.value,
      },
    }));
  }

  function handleEducationChange(e, inputValue) {
    setForm((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [inputValue]: e.target.value,
      },
    }));
  }

  function handleExperienceChange(e, inputValue) {
    setForm((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [inputValue]: e.target.value,
      },
    }));
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-300 flex justify-center gap-36 px-6 py-8">
      <div className="flex flex-col gap-4">
        <FormSection
          title="Personal Information"
          icon={faUser}
          onFormSelected={() => setShowUserInfForm((prevState) => !prevState)}
        >
          {showUserInfForm && (
            <>
              <Input
                label="Full Name"
                id="fullName"
                onChangeInput={handlePersonalInfChange}
              />
              <Input
                label="Email"
                id="email"
                onChangeInput={handlePersonalInfChange}
              />
              <Input
                label="Phone number"
                id="phoneNumber"
                onChangeInput={handlePersonalInfChange}
              />
              <Input
                label="Address"
                id="address"
                onChangeInput={handlePersonalInfChange}
              />
            </>
          )}
        </FormSection>
        <FormSection
          title="Education"
          icon={faGraduationCap}
          onFormSelected={() => setShowEducationForm((prevState) => !prevState)}
        >
          {showEducationForm && (
            <>
              <Input
                label="School"
                id="school"
                onChangeInput={handleEducationChange}
              />
              <Input
                label="Degree"
                id="degree"
                onChangeInput={handleEducationChange}
              />
              <DateGroup handleDateChange={handleEducationChange} />
              <Input
                label="Location"
                id="location"
                onChangeInput={handleEducationChange}
              />
            </>
          )}
        </FormSection>
        <FormSection
          title="Work Experience"
          icon={faBriefcase}
          onFormSelected={() => setShowWorkExpForm((prevState) => !prevState)}
        >
          {showWorkExpForm && (
            <>
              <Input
                label="Company Name"
                id="companyName"
                onChangeInput={handleExperienceChange}
              />
              <Input
                label="Position Title"
                id="positionTitle"
                onChangeInput={handleExperienceChange}
              />
              <DateGroup handleDateChange={handleExperienceChange} />
              <Input
                label="Location"
                id="location"
                onChangeInput={handleExperienceChange}
              />
              <Input
                label="Description"
                id="description"
                onChangeInput={handleExperienceChange}
              />
            </>
          )}
        </FormSection>
      </div>
      <div className="bg-stone-50 h-[845px] min-w-[700px] max-w-[700px] break-all">
        <Curriculum form={form} />
      </div>
    </main>
  );
}
