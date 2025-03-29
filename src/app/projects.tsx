import { Header, LeftPanel, RightPanel } from "@/shared";


export default function Projects() {
  
    return (
      <>
        <Header />

        <div className="flex flex-col gap-5 md:flex-row">

          <LeftPanel />

          <RightPanel />

        </div>
      </>
    );
  };
