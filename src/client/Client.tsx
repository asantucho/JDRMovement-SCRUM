import { useRouter } from 'next/router';

type IClientProps = {
  image: string;
  imageAlt: string;
  imageWidth?: string;
};

const Client = (props: IClientProps) => {
  const router = useRouter();
  return (
    <div className="m-5  md:w-1/5">
      <div className="flex items-center justify-center md:h-32">
        <img
          width={props.imageWidth}
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { Client };
