import React from "react";
import Button from "./Button";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Dialog({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 p-3 font-mono text-white outline-none transition-all transition-all focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative mx-auto my-6 w-auto max-w-3xl rounded-lg border-2 border-zinc-600">
              {/*content*/}
              <div className="relative z-50 flex w-full flex-col rounded-lg border-0 bg-[#3a3a3a] shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b-2 border-solid border-white/20 p-5">
                  <h3 className="font-mono text-3xl font-semibold">
                    Welcome to $AGENT 🤖
                  </h3>
                  <button className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none opacity-5 outline-none focus:outline-none">
                    <span className="block h-6 w-6 bg-transparent text-2xl opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="text-md relative my-3 flex-auto p-3 leading-relaxed">
                  <p>
                    <strong>$AGENT</strong> Discover the power of true AI
                    freedom with our uncensored AI task technology. 🚀.
                  </p>
                  <div>
                    <br />
                    Discover the revolutionary power of $AGENTAI, the language
                    model that can run itself. Through advanced self-prompting
                    technology, $AGENTAI can automate and accelerate tasks in
                    text and code while generating new prompts based on initial
                    inputs. Combined with web search and code testing tools,
                    $AGENTAI is more than a simple generator - it's a fully
                    autonomous assistant that can transform the way you work.
                    Experience the limitless possibilities of AI with $AGENTAI
                    today.
                    Contract Address : 00x000000
                    <p className="mt-2">Join Us Now:</p>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-center gap-5">
                    <div
                      className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
                      onClick={() => window.open("https://twitter.com/AutonomousAIerc", "_blank")}
                    >
                      <FaTwitter size={30} />
                    </div>
                   
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t-2 border-solid border-white/20 p-2">
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
