import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth?: string;
  imageClassname?: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
    'mt-[2rem]',
  );

  const router = useRouter();

  return (
      <div className={verticalFeatureClass}>
        <div className="w-full text-center sm:w-1/2 sm:px-6" >
          <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
          <div className="mt-4 text-lg leading-7">{props.description}</div>
        </div>

        <div className="w-full p-6 sm:w-1/2">
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            style={{ width: props.imageWidth }}
            className={props.imageClassname}
          />
        </div>
      </div>
  );
};

export { VerticalFeatureRow };
