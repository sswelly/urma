import {LeftPanel, RightPanel } from "@/shared";

export default function Home() {
  
    return (
      <>

        <div className="flex flex-col gap-5 md:flex-row">

          <LeftPanel />

          <RightPanel />

        </div>

      </>
    );
  };
