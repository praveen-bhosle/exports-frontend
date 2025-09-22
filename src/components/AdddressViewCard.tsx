import type { Address } from "../interfaces/Address";
import EditAddressForm from "./EditAddressForm";
import Modal from "./Modal";
import { useState } from "react";
import type { UseMutationResult } from "@tanstack/react-query";

const AddressViewCard = (
  { address, editMutation }:
  { address: Address, editMutation: UseMutationResult<{ success: boolean; data: any }, Error, Address, unknown> }) => {
  const [editState, setEditState] = useState(false);
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 text-sm flex flex-col justify-between ">
      <div className="flex flex-col gap-2 mb-4">
        <div className="font-bold text-lg text-blue-400"> {address.fullName}</div>
        <div className="text-xs sm:text-sm text-gray-300">
          {address.addr1 && address.addr1 + ','} {address.addr2 && address.addr2 + ','} {address.landmark && address.landmark + ','} {address.city && address.city + ','} {address.state && address.state + ','} {address.pincode && address.pincode + ','} {address.country && address.country}
        </div>
      </div>
      <div className="text-gray-400 mb-4"> Phone number: {address.mobileNumber} </div>
      <div className="flex gap-4 text-blue-400">
        <span className="cursor-pointer hover:underline" onClick={() => { setEditState(true); }}> Edit </span>
      </div>
      {editState && <Modal children={<EditAddressForm address={address} stateFn={setEditState} editMutation={editMutation} />} />}
    </div>
  );
};

export default AddressViewCard;