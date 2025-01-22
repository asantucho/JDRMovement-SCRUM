import { useRouter } from "next/router";
import { BackToTheTop } from "@/arrow/BackToTheTop";


type IMediaProps = {
  title: string;
  text: string;
  id?:string;
  image: string;
  imageAlt: string;
  imageWidth?: string;
  reverse?: boolean;
};



const CompMedia = (props: IMediaProps) => {

  const router = useRouter()

  const paragraphs = props.text.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4">{paragraph}</p>
  ));

  return (
  <div>
    <div className="text-center" id="media">
      <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-900">
        {props.title}
      </h1>
    </div>
    <div className="flex flex-wrap items-center">
      <div className="mt-4 text-lg leading-7 sm:w-1/2 text-center">
          {paragraphs}
      </div>
      <div className="w-full p-6 sm:w-1/2 ">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          style={{ width: props.imageWidth }}
          className="mx-auto"
        />
      </div>
      <BackToTheTop/>
    </div>
  </div>
);

}



export { CompMedia };