type ICompAboutUsProps = {
  title: string;
  text: string;
  id?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  reverse?: boolean;
};

const CompAboutUs = (props: ICompAboutUsProps) => {
  const paragraphs = props.text.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ));
  return (
    <div>
      <div className="text-center" id="about">
        <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-100">
          {props.title}
        </h1>
      </div>
      <div className="flex flex-wrap items-center">
        {/* For mobile, text first if reverse is true, else image first */}
        <div className={`w-full p-6 text-center text-gray-100`}>
          {paragraphs}
        </div>
        <div className={`w-full p-6`}></div>
      </div>
    </div>
  );
};

export { CompAboutUs };
