import { useState } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

const Calcultor = () => {
  const [input, setInput] = useState("");

  const handleInput = (props: string) => {
    setInput(input + props);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBackSpace = () => {
    setInput(input.slice(0, -1));
  };
  const dataset = [
    {
      row: [
        {
          functionName: handleClear,
          text: "C",
          class: "text-danger",
          funcProps: null,
        },
        {
          functionName: handleInput,
          text: "%",
          class: "text-danger",
          funcProps: "%",
        },
        {
          functionName: handleBackSpace,
          text: "Back",
          class: "text-danger",
          funcProps: null,
        },
        { functionName: handleInput, text: "/", class: "", funcProps: "/" },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "7",
          class: "text-danger",
          funcProps: "7",
        },
        {
          functionName: handleInput,
          text: "8",
          class: "text-danger",
          funcProps: "8",
        },
        {
          functionName: handleInput,
          text: "9",
          class: "text-danger",
          funcProps: "9",
        },
        { functionName: handleInput, text: "X", class: "", funcProps: "*" },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "4",
          class: "text-danger",
          funcProps: "4",
        },
        {
          functionName: handleInput,
          text: "5",
          class: "text-danger",
          funcProps: "5",
        },
        {
          functionName: handleInput,
          text: "6",
          class: "text-danger",
          funcProps: "6",
        },
        { functionName: handleInput, text: "-", class: "", funcProps: "-" },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "1",
          class: "text-danger",
          funcProps: "1",
        },
        {
          functionName: handleInput,
          text: "2",
          class: "text-danger",
          funcProps: "2",
        },
        {
          functionName: handleInput,
          text: "3",
          class: "text-danger",
          funcProps: "3",
        },
        { functionName: handleInput, text: "+", class: "", funcProps: "+" },
      ],
    },
    {
      row: [
        { functionName: "", text: "", class: "", funcProps: "" },
        {
          functionName: handleInput,
          text: "0",
          class: "text-danger",
          funcProps: "0",
        },
        {
          functionName: handleInput,
          text: ".",
          class: "text-danger",
          funcProps: ".",
        },
        {
          functionName: handleResult,
          text: "=",
          class: "bg-success",
          funcProps: null,
        },
      ],
    },
  ];

  const data = dataset.map((item) => {
    return item.row;
  });

  return (
    <>
      <Container className="border">
        <InputGroup size="lg" className="mb-3">
          <Form.Control
            aria-label="Small"
            type="text"
            readOnly
            value={input}
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        {data.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((button, buttonIndex) => (
              <Col key={buttonIndex}>
                <button
                  onClick={() => button.functionName(button.funcProps)}
                  className={button.class}
                >
                  {button.text}
                </button>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Calcultor;
