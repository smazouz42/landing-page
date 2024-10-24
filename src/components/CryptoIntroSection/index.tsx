import { Button } from "@/components/Systems/button";
import { Description } from "@/components/Systems/description";
import { Title } from "@/components/Systems/Title";
import Image from "next/image";
const CryptointoSection = () => {
    return (
        <div className="flex w-full ">
            <div className="flex flex-col justify-center gap-8 w-1/2">
                <Title
                    content="Take your first step into safe, secure crypto investing"
                    size="sm"
                    maxWidth="sm"
                />
                <Description
                    content="Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean. Separated they live in Bookmarks right at the coast."
                />
                <Button variant="gradient">Get Started</Button>
            </div>
            <div className="w-1/2 flex justify-center">

                <Image
                    src="/images/luggage.png"
                    className="flex items-end"
                    width={580}
                    height={420}
                    alt="Crypto visual"
                />
            </div>
        </div>
    )
}
export { CryptointoSection }