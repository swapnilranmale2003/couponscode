import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { PiHandshakeThin } from "react-icons/pi";

import "./Invite.css";

function Invite() {
  return (
    <div className="invite-section">
      <div className="forge">
        <h1 className="forge-title">Forge</h1>
        <div>
          <PiHandshakeThin size="5rem" color="#00A8FF" />
        </div>
        <h1 className="forge-title">Connection</h1>
      </div>

      <div className="share-card">
        <ShareViaEmail
          subject="Exciting Opportunity!"
          msgBody="🎉 Check out this platform: https://couponscode.vercel.app/"
        />
        <ShareViaWhatsApp
          subject="https://couponscode.vercel.app/"
          msgBody="🎉 Exciting News! 🎉"
        />
        <CopyToClipboard text="https://couponscode.vercel.app/" />
      </div>
    </div>
  );
}

function ShareViaEmail({ subject, msgBody }) {
  const handleShare = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(msgBody)}&ui=2&tf=1&pli=1`;
    window.open(url, "_blank", "toolbar=0,status=0,width=1200,height=800");
  };

  return (
    <div className="share-icon" title="Share via Email" onClick={handleShare}>
      <MdEmail size={"4rem"} />
      <p>Email</p>
    </div>
  );
}

function ShareViaWhatsApp({ subject, msgBody }) {
  const handleShare = () => {
    const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      subject
    )}%0A${encodeURIComponent(msgBody)}`;
    window.open(url, "_blank", "toolbar=0,status=0,width=1200,height=800");
  };

  return (
    <div
      className="share-icon"
      title="Share via WhatsApp"
      onClick={handleShare}
    >
      <FaWhatsapp size={"4rem"} />
      <p>WhatsApp</p>
    </div>
  );
}

function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="share-icon" title="Copy link" onClick={handleCopy}>
      <IoIosLink size={"4rem"} />
      <p>{copied ? "Copied!" : "Copy Link"}</p>
    </div>
  );
}

export default Invite;
