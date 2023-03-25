import React from "react";

function Info() {
  return (
    <div className="bg-black text-white p-5">
      <div className="text-center">
        <p className="fs-2 fw-bold">6000+ Users trust StarClinch.</p>
        <p className="pb-3 text-danger">Booking Terms & Conditions</p>
        <p className="fs-2 fw-bold">BOOKING TERMS & CONDITIONS FOR CLIENT</p>
        <p className="pb-3 fs-4">Advance Fee and Payment Terms</p>
      </div>
      <ul>
        <li>All acts are subject to availability</li>
        <li>GST @18% will be applicable</li>
        <li>We take an advance of 50% to confirm a show</li>
        <li>Quotation is valid for 14 days and subject to change</li>
        <li>The balance amount needs to be paid 7 days before the show</li>
        <li>
          TBL (Travel, Boarding & Lodging) will be arranged by the organizer
        </li>
        <li>
          Tech-Rider (sound, stage & lighting) will be arranged by the organizer
        </li>
        <li>EMI is applicable for payments made by Credit Cards only</li>
      </ul>
    </div>
  );
}

export default Info;
