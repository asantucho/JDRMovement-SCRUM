import { BackToTheTop } from '@/arrow/BackToTheTop';
import { useRouter } from 'next/router';

type ICompAboutUsProps = {
  title: string;
  text: string;
  id?:string;
  image: string;
  imageAlt: string;
  imageWidth?: string;
  reverse?: boolean;
};

const CompAboutUs = (props: ICompAboutUsProps) => {

  const router = useRouter();

  const paragraphs = props.text.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4">{paragraph}</p>
  ));
  return (
<div>
      <div className="text-center" id="about">
        <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-900">
          {props.title}
        </h1>
      </div>
      <div className="flex flex-wrap items-center">
        {/* For mobile, text first if reverse is true, else image first */}
        <div className={`text-center w-full sm:w-1/2 p-6`}>
          {paragraphs}
        </div>
        <div className={`w-full sm:w-1/2 p-6`}>
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            style={{ width: props.imageWidth }}
            className="mx-auto"
          />
        </div>
      </div>
    <BackToTheTop/>
  </div>
);

}



export { CompAboutUs };