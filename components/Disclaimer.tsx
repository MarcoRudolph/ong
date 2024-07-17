import { FC } from 'react';

interface DisclaimerProps {}

const Disclaimer: FC<DisclaimerProps> = () => {
  return (
    <div className="w-[80%] h-12">
      <h2 className="font-sans text-2xl text-center">Keine Erotikmassage</h2>
    </div>
  );
}

export default Disclaimer;
