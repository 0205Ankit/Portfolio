import Image from "next/image";
import "./card.css";
import { LuGithub, LuLink } from "react-icons/lu";

type CardProps = {
  gitLink: string;
  liveLink: string;
  name: string;
  url: string;
  alignRight?: boolean;
};

export default function Card({
  gitLink,
  liveLink,
  name,
  url,
  alignRight,
}: CardProps) {
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
                    Go to settings &gt; Privacy & Security &gt; Security &gt; No
                    protection{" "}
                  </p>
                  <p className="text-sm mt-3">
                    ( The site is storing username and password to a unknown
                    database so your browser may restrict you from visiting
                    pages like this )
                  </p>
                </div>
              )}

              {name === "ChatFrame" && (
                <div className="notes text-white">
                  <p className="text-sm mt-5">
                    UploadThing is used for managing photo uploads.
                  </p>
                  <p className="text-sm mt-3">
                    TRPC is used for fetching data from the server.
                  </p>
                  <p className="text-sm mt-3">
                    ( The Express.js server is solely utilized for implementing
                    socket.io. The server is hosted on Railway, and the Next.js
                    application is deployed on Vercel. Read more about the
                    project on github. )
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
