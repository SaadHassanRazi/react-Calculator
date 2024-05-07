import { useState } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

interface Button {
  functionName: (props: string | null) => void;
  text: string;
  class: string;
  funcProps: string | null;
}

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handleInput = (props: string | null) => {
    setInput((prevInput) => prevInput + (props !== null ? props : ""));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleResult = () => {
    try {
      const result = eval(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput("");
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBackSpace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const dataset: { row: Button[] }[] = [
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
          class: "text-success",
          funcProps: "%",
        },
        {
          functionName: handleBackSpace,
          text: "Back",
          class: "text-success",
          funcProps: null,
        },
        { functionName: handleInput, text: "/", class: "text-success", funcProps: "/" },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "7",
          class: "text-dark",
          funcProps: "7",
        },
        {
          functionName: handleInput,
          text: "8",
          class: "text-dark",
          funcProps: "8",
        },
        {
          functionName: handleInput,
          text: "9",
          class: "text-dark",
          funcProps: "9",
        },
        {
          functionName: handleInput,
          text: "X",
          class: "text-success",
          funcProps: "*",
        },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "4",
          class: "text-dark",
          funcProps: "4",
        },
        {
          functionName: handleInput,
          text: "5",
          class: "text-dark",
          funcProps: "5",
        },
        {
          functionName: handleInput,
          text: "6",
          class: "text-dark",
          funcProps: "6",
        },
        { functionName: handleInput, text: "-", class: "text-success", funcProps: "-" },
      ],
    },
    {
      row: [
        {
          functionName: handleInput,
          text: "1",
          class: "text-dark",
          funcProps: "1",
        },
        {
          functionName: handleInput,
          text: "2",
          class: "text-dark",
          funcProps: "2",
        },
        {
          functionName: handleInput,
          text: "3",
          class: "text-dark",
          funcProps: "3",
        },
        { functionName: handleInput, text: "+", class: "text-success", funcProps: "+" },
      ],
    },
    {
      row: [
        { functionName: () => {}, text: "", class: "", funcProps: "" },
        {
          functionName: handleInput,
          text: "0",
          class: "text-dark",
          funcProps: "0",
        },
        {
          functionName: handleInput,
          text: ".",
          class: "text-dark",
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

  const data: Button[][] = dataset.map((item) => item.row);

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

        <Row>
          <Col>
            <h5>History:</h5>
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

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

export default Calculator;
