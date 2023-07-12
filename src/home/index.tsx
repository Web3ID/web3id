import { Community } from "./Community";
import { Customers } from "./Customers";
import { Hero } from "./Hero";
import { DAOSystem } from "./DAOSystem";
import { Features } from "./features";
import Sponsor from "./Sponsor";
import { fetchGuild } from "@utils/api";
import { GetStaticProps } from "next";
import { useSSG } from "nextra/data";

export type HomeProps = {
  serverMembers: number;
  guildCount: number;
};

export const getStaticProps: GetStaticProps<{ ssg: HomeProps }> = async () => {
  const { guildCount, serverMembers } = await fetchGuild().catch(() => ({
    guildCount: 0,
    serverMembers: 0,
  }));

  return {
    props: {
      ssg: {
        serverMembers,
        guildCount,
      },
    },
    revalidate: 60,
  };
};

export default function HomePage() {
  const { guildCount, serverMembers } = useSSG() as HomeProps;

  return (
    <div className="bg-white dark:bg-black">
      <style global jsx>
        {`
          html,
          body {
            max-width: 100% !important;
            height: 100% !important;
            width: 100% !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
          }

          .nx-overflow-x-hidden {
            overflow-x: unset !important;
          }
        `}
      </style>
      <div className="mx-auto flex max-w-[1400px] flex-col px-3 md:px-6">
        <Hero />
        <Features />
        <DAOSystem />
        <Customers usedBy={guildCount} />
      </div>
      <Sponsor />
      <Community joined={serverMembers} />
    </div>
  );
}
