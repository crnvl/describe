"use client";

import { useState } from "react";

export default function Home() {
  const [buttonLabel, setButtonLabel] = useState(<p>generate</p>);
  const [errorAlert, setErrorAlert] = useState(<></>);
  const [description, setDescription] = useState("");

  async function callApi() {
    setButtonLabel(
      <span className="loading loading-infinity loading-lg"></span>
    );
    setErrorAlert(<></>);

    let imageUrl = document.getElementById("imageUrl") as HTMLInputElement;

    let password = window.localStorage.getItem("password");

    let response = await fetch("http://localhost:3000/api/describe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: imageUrl.value,
        password: password,
      }),
    });

    setButtonLabel(<p>generate</p>);

    if (response.status !== 200) {
      return setErrorAlert(
        <div role="alert" className="alert alert-error">
          <span>please enter a valid image url.</span>
        </div>
      );
    }

    let data = await response.json();
    setDescription(data.content);
    (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
  }

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">image description</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex justify-center items-center h-screen bg-base-100">
        <div className="flex gap-2 flex-col">
          {errorAlert}
          <div className="text-secondary flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-bold">describe.</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <input
              type="text"
              placeholder="enter an image url"
              className="input input-bordered w-full max-w-xs"
              id="imageUrl"
            />
            <button className="btn btn-secondary" onClick={callApi}>
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
