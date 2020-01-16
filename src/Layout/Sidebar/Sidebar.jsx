import React from "react";
import "./Sidebar.scss";
import InvoiceButton from "../../components/InvoiceButton/InvoiceButton";
import SidebarLabel from "../../components/SidebarLabel/SidebarLabel";
import SidebarNavlink from "../../components/SidebarNavlink/SidebarNavlink";

const Sidebar = () => {
  const overview = "assets/overview.svg";
  const profile = "assets/merchant_profile.svg";

  const navLinks = [
    { text: "All Payments", icon: "assets/payments.svg" },
    { text: "Reconciled Payments", icon: "assets/reconciled.svg" },
    { text: "Un - Reconciled Payments", icon: "assets/unreconciled.svg" },
    { text: "Manual Settlement", icon: "assets/radio.svg" }
  ];
  const navLinks2 = [
    { text: "All Orders", icon: "assets/all_orders.svg" },
    { text: "Pending Orders", icon: "assets/pending_orders.svg" },
    { text: "Reconciled Orders", icon: "assets/reconciled_orders.svg" }
  ];

  return (
    <div className="Sidebar">
      <InvoiceButton />
      <div className="links_collection">
        <SidebarLabel text="Main" />
        <SidebarNavlink text="Overview" icon={overview} />
      </div>
      <div className="links_collection">
        <SidebarLabel text="Payments" />
        {navLinks.map(nav => (
          <SidebarNavlink text={nav.text} icon={nav.icon} />
        ))}
      </div>
      <div className="links_collection">
        <SidebarLabel text="Orders" />
        {navLinks2.map(nav => (
          <SidebarNavlink text={nav.text} icon={nav.icon} />
        ))}
      </div>
      <div className="links_collection">
        <SidebarNavlink text="Merchant Profile" icon={profile} />
      </div>
    </div>
  );
};

export default Sidebar;
