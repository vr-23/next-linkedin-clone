import { Button } from "@/components/ui/button";
import UserInformation from "@/components/UserInformation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        {/* user information */}
        <UserInformation />
      </section>

      <section>
        {/* feed and post form*/}
      </section>

      <section>
        {/* widget */}
      </section>
    </div>
  );
}
