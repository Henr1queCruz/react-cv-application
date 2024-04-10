export default function ContentCV({
  sectionTitle,
  title,
  degree,
  position,
  description,
  location,
  startDate,
  endDate,
}) {
  return (
    <div className="mb-5">
      <p className="text-3xl uppercase font-semibold border-b border-zinc-950 mb-2">
        {sectionTitle}
      </p>
      <div className="flex justify-between">
        <p className="font-medium text-xl uppercase">{title}</p>
        {startDate && endDate && (
          <p>
            {startDate} to {endDate}
          </p>
        )}
      </div>
      <p className="text-lg">{degree}</p>
      <p className="text-lg">{position}</p>
      <p className="text-sm">{location}</p>
      <p className="text-stone-400">{description}</p>
    </div>
  );
}
