import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-1">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">AiPilot</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2 justify-evenly">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                WhatsApp
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};
