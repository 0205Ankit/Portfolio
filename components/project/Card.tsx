import Image from "next/image";
import "./card.css"
import { LuGithub, LuLink } from "react-icons/lu";

type CardProps={
  gitLink:string,
  liveLink:string,
  name:string,
  url:string,
  alignRight?:boolean
}

export default function Card({gitLink,liveLink,name,url,alignRight}:CardProps){
    return (
      <div className={`${alignRight && "flex justify-end"}`}>
        <div className={`card min-w-[60%] max-w-[60%] rounded-lg`}>
          <div className="card_content">
            {/* frontSide */}
            <div
              className="card_front"
              style={{ backgroundImage: `url(${url})` }}
            >
              <p className="card_subtitle text-white text-sm mb-3">
                Featured Project
              </p>
              <h3 className="card_title text-white text-4xl font-semibold tracking-[1px]">
                {name}
              </h3>
            </div>
            {/* backSide */}
            <div className="card_back text-white flex justify-start">
              <div className="card_body w-10/12 mx-auto mt-8 mb-5 text-white">
                <div className="links">
                  <a
                    href={`${gitLink}`}
                    target="_blank"
                    className="flex gap-2 items-center text-base z-10 text-white"
                  >
                    <LuGithub className="text-3xl" />
                    <span className="underline">{gitLink}</span>
                  </a>
                  <a
                    href={`${liveLink}`}
                    target="_blank"
                    className="flex gap-2 items-center text-base mt-3 z-10 text-white"
                  >
                    <LuLink className="text-3xl" />
                    <span className="underline">{liveLink}</span>
                  </a>
                </div>
                {name === "Netflix Clone" && (
                  <div className="notes text-white">
                    <p className="text-sm mt-5">
                      Note: Make sure to put your Safe Browsing settings to No
                      protection (for Google chrome)
                    </p>
                    <p className="text-sm mt-3">
                      Go to settings &gt; Privacy & Security &gt; Security &gt;
                      No protection{" "}
                    </p>
                    <p className="text-sm mt-3">
                      ( The site is storing username and password to a unknown
                      database so your browser may restrict you from visiting
                      pages like this )
                    </p>
                  </div>
                )}

                {name === "User Log" && (
                  <div className="notes text-white">
                    <p className="text-sm mt-5">
                      AWS S3 bucket is used for storing Image files, You can
                      view and update images from inside the app
                    </p>
                    <p className="text-sm mt-3">
                      RTK Query is used for fetching the Api&apos;s
                    </p>
                    <p className="text-sm mt-3">
                      ( The Backend and Database both are hosted on vercel
                      free-tier package so, In future the site may get broken
                      after exhausting the computing time and memory. You can
                      still check the source code on github )
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}