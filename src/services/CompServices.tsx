import { useRouter } from 'next/router';

type ImageItem = {
  image: string;
  imageAlt: string;
  imageWidth?: string;
  title: string;
  text: string;
};

type CompServicesProps = {
  title: string;
  text?: string;
  id?: string;
  images: ImageItem[];
};

const CompServices = ({ title, images }: CompServicesProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="text-center" id="services">
        <h1 className="whitespace-pre-line text-2xl font-bold leading-hero text-gray-900">
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center p-6 text-center sm:w-1/3"
          >
            <img
              src={`${router.basePath}${item.image}`}
              alt={item.imageAlt}
              style={{ width: item.imageWidth }}
              className="mx-auto mb-4"
            />
            <div>
              <h2 className="text-md mb-2 font-bold">{item.title}</h2>
              <p className="mb-2 text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CompServices };
