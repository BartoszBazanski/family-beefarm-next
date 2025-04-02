import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { ClassNameProp } from 'typings/props';

type HexFrameImageProps = {
  imageSrc: StaticImageData | string;
} & ClassNameProp;

export const HexFrameImage = ({ className, imageSrc }: HexFrameImageProps) => {
  return (
    <div
      className={clsx(
        'from-secondary/90 bg-clip-hexagon flex size-32 items-center justify-center bg-radial to-70%',
        className,
      )}
    >
      <div className="bg-secondary bg-clip-hexagon h-25 w-22 p-px">
        <div className="bg-secondary bg-clip-hexagon size-full p-0.5">
          <div className="bg-secondary bg-clip-hexagon size-full p-px">
            <Image src={imageSrc} alt="Hex frame" className="bg-clip-hexagon size-full object-cover" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};
