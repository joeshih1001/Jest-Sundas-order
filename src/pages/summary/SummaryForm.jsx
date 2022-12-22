import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [tcCheck, setTcCheck] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcCheck}
          onChange={(e) => setTcCheck(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcCheck}>
        Confirm order
      </Button>
    </Form>
  );
}
