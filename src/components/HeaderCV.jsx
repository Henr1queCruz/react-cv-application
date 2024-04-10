import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderCV({ fullName, email, phoneNumber, address }) {
  return (
    <div className="bg-black text-stone-50 py-9 px-8">
      <h1 className=" text-center font-bold text-4xl mb-4">{fullName}</h1>
      <div className="flex justify-center gap-16">
        {email && (
          <p>
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            {email}
          </p>
        )}
        {phoneNumber && (
          <p>
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            {phoneNumber}
          </p>
        )}
        {address && (
          <p>
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
