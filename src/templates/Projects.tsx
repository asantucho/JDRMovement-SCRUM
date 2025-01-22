import { BackToTheTop } from '@/arrow/BackToTheTop';
import { Background } from '../background/Background';
import { Client } from '../client/Client';

const Projects = () => (
  <Background color="bg-gray-200">
    <div className="mx-auto max-w-screen-lg px-3 py-16" id='clients'>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Clients</h2>
        <div className="mt-4 text-xl md:px-20">
          Some companies that trust us
        </div>
      </div>

      <div className="flex flex-col justify-center gap-10 md:flex-row">
        <Client
          image="/assets/images/client-google.svg"
          imageAlt="Google logo"
          imageWidth="130px"
        />
        <Client
          image="/assets/images/client-warner.svg"
          imageAlt="Warner Bros logo"
          imageWidth="130px"
        />
        <Client
          image="/assets/images/client-swxtch.svg"
          imageAlt="swxtch.io logo"
          imageWidth="130px"
        />
        <Client
          image="/assets/images/client-aws.svg"
          imageAlt="AWS logo"
          imageWidth="130px"
        />
        <Client
          image="/assets/images/client-azure.svg"
          imageAlt="Azure logo"
          imageWidth="130px"
        />
        <Client
          image="/assets/images/client-iex.svg"
          imageAlt="IEX Trading"
          imageWidth="100px"
        />
      </div>
      <BackToTheTop/>
    </div>
  </Background>
);

export { Projects };
