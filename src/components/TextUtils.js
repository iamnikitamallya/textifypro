import React, { useState, useRef } from "react";
import { Text, Button } from "@nikitamallya/react-ui-components";
export default function TextUtils(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpRequest = () => {
    console.log(setText);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };

  const handleLowerCaseRequest = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const textForm = useRef(null);

  const copyText = () => {
    if (textForm.current) {
      textForm.current.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      props.showAlert("Text copied!", "success");
    }
  };

  return (
    <>
      <div className="pt-5 pb-5">
        <Text
          variant="h4"
          content="Text Case Convertor | Words & Character Counter"
          className="pb-1"
        />
        <Text
          variant="para"
          content="Textify Pro is a versatile and user-friendly application designed to empower users with the ability to manipulate text effortlessly. Whether you need to convert text to uppercase, lowercase, or any other format, this app has got you covered. With a sleek and intuitive interface, transforming text has never been easier."
        />
        <div className="mb-3">
          <textarea
            className={`form-control textutils_textarea ${props.mode}`}
            id="textForm"
            rows="10"
            value={text}
            onChange={handleOnChange}
            ref={textForm}
          ></textarea>
          {/* <p onClick={copyText}>Copy</p> */}
        </div>
        <div className={` d-flex gap-2 ${props.mode} `}>
          <Button
            title=" Convert to Uppercase"
            size="sm"
            variant="dark"
            onClick={handleUpRequest}
            disabled={text.length === 0}
          />
          <Button
            title=" Convert to Lowercase"
            size="sm"
            variant="dark"
            onClick={handleLowerCaseRequest}
            disabled={text.length === 0}
          />
          <Button
            title="Copy to Clipboard"
            size="sm"
            variant="dark"
            onClick={copyText}
            disabled={text.length === 0}
          />
          <Button
            title="Clear Text"
            size="sm"
            variant="dark"
            onClick={handleClearText}
            disabled={text.length === 0}
          />
        </div>
        <div className="my-3">
          <Text variant="h6" content="Your text summary" className="fw-bold" />
          <div className="d-flex text-center gap-3">
            <p>
              <strong className="counter">
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </strong>{" "}
              <Text content="Words" />
            </p>
            <p>
              <strong className="counter">{text.length}</strong>
              <Text content="Characters" />
            </p>
            <p>
              <strong className="counter">
                {
                  text.split(". " || "? ").filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </strong>
              <Text content="Sentence" />
            </p>
          </div>
          <p>
            <b>{text.length ? (1 / 125) * text.split(" ").length : "0.00"}</b>{" "}
            Minutes to read
          </p>
        </div>
      </div>
    </>
  );
}
