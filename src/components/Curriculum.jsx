import ContentCV from './ContentCV';
import HeaderCV from './HeaderCV';

export default function Curriculum({ form }) {
  return (
    <>
      <HeaderCV {...form.personalInf} />
      <div className="py-9 px-10">
        <ContentCV
          sectionTitle="Education"
          title={form.education.school}
          degree={form.education.degree}
          location={form.education.location}
          startDate={form.education.startDate}
          endDate={form.education.endDate}
        />
        <ContentCV
          sectionTitle="Experience"
          title={form.experience.companyName}
          position={form.experience.positionTitle}
          location={form.experience.location}
          startDate={form.experience.startDate}
          endDate={form.experience.endDate}
          description={form.experience.description}
        />
      </div>
    </>
  );
}
