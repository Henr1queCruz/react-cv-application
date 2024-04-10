import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RotatingIcon from './RotatingIcon';

export default function FormSection({ title, children, icon, onFormSelected }) {
  return (
    <form className="bg-stone-50 min-w-[440px] px-4 py-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <i>
              <FontAwesomeIcon icon={icon} size="xl" />
            </i>
          )}
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
        </div>
        <RotatingIcon onFormSelected={onFormSelected} />
      </div>
      {children}
    </form>
  );
}
