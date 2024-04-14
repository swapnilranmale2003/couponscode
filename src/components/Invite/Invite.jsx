import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { PiHandshakeThin } from "react-icons/pi";

import "./Invite.css";

function Invite() {
  return (
    <div>
        <div className="forge">
        <div className="forge-title">Forge</div>
        <div><PiHandshakeThin size={'5rem'}  color="rgb(0, 140, 255)"/></div>
        <div className="forge-title">Connection</div>
      </div>
      <div className="share">
        <div className="email">
          <Justshare subject="this is sub" msgBody="This is body" />
        </div>
        <div className="whatsapp">
          <ShareViaWhatsApp />
        </div>
        <div className="sharelink">
          <CopyToClipboard text="google.com" />
        </div>
      </div>
    </div>
  );
}

function ShareViaWhatsApp({ subject, msgBody }) {
  const handleShare = () => {
    const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      subject
    )}%0A${encodeURIComponent(msgBody)}`;
    window.open(url, "sharer", "toolbar=0,status=0,width=1200,height=1200");
  };

  return (
    <a onClick={handleShare}>
      {" "}
      <FaWhatsapp size={"5rem"} className="whatsappshare" />{" "}
    </a>
  );
}

function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div>
      <button className="copybtn" onClick={handleCopy}>
        {copied ? "Copied!" : `Invite`}
      </button>
    </div>
  );
}

function Justshare({ subject, msgBody }) {
  const handleShare = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(msgBody)}&ui=2&tf=1&pli=1`;
    window.open(url, "sharer", "toolbar=0,status=0,width=1200,height=1200");
  };

  return (
    <a onClick={handleShare}>
      <MdEmail size={"5rem"} className="justshare" />
    </a>
  );
}

export default Invite;
