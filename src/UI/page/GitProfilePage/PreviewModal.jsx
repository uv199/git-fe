"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function PreviewModal({ openModal, toggle, repos }) {
  return (
    <>
      <Modal show={openModal} onClose={toggle}>
        <Modal.Header>REPOSITORY DETAILS</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-500">
              <span className="text-black font-semibold mr-2">FULL NAME :</span>
              {repos?.full_name}
            </p>
            <p className="leading-relaxed text-gray-500">
              <span className="text-black font-semibold mr-2">
                DESCRIPTION :
              </span>
              {repos?.description}
            </p>
            <p className="leading-relaxed text-gray-500">
              <span className="text-black font-semibold">WEB LINK :</span>
              <a
                href={repos?.html_url}
                className="underline text-blue-600 ml-2 hover:no-underline"
              >
                {repos?.html_url}
              </a>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
