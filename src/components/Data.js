import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import { Button } from "@mui/material";

export default function FormPropsTextFields() {
  const initialValue = {
    cpu: "",
    motherboard: "",
    ram: "",
    gpu: "",
    ssd: "",
  };

  const [costValues, setCostValues] = React.useState(initialValue);
  const [costTotal, setCostTotal] = React.useState(0);
  const [sellValues, setSellValues] = React.useState(initialValue);
  const [sellTotal, setSellTotal] = React.useState(0);

  const btnReset = () => {
    setCostValues(initialValue);
    setSellValues(initialValue);
    setCostTotal(0);
    setSellTotal(0);
  };

  const costHandleInputChange = (e) => {
    const { value, name } = e.target;

    setCostValues({
      ...costValues,
      [name]: value,
    });

    let sum = sumOfTotal(costValues);
    setCostTotal(sum);
  };

  const sellHandleInputChange = (e) => {
    const { value, name } = e.target;
    const parsedValue = value === "" ? "" : parseFloat(value);

    setSellValues({
      ...sellValues,
      [name]: parsedValue,
    });

    console.log(sellValues);

    let sum = sumOfTotal(sellValues);
    setSellTotal(sum);
    // console.log(sellTotal);
  };

  const sumOfTotal = (obj) => {
    let a = Object.values(obj);
    console.log(a);
    let sum = _(a)
      .map((el) => {
        return el === "" ? 0 : parseFloat(el);
      })
      .sum(a);

    return sum;
  };

  // const arr = Object.values(sellValues);
  // console.log(lodash);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h3" gutterBottom component="div">
          Sell And Cost Calculator
        </Typography>
      </div>
      <div>
        <TextField label="CPU" type="Text" />
        <TextField label="Model" type="Text" />
        <TextField label="HOC Code" type="Text" />
        <TextField
          name="cpu"
          label="Cost Inc"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={costValues.cpu}
          onChange={costHandleInputChange}
          onKeyUp={costHandleInputChange}
        />
        <TextField
          name="cpu"
          label="Sell"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={sellValues.cpu}
          onChange={sellHandleInputChange}
          onKeyUp={sellHandleInputChange}
        />
      </div>
      <div>
        <TextField label="Motherboard" type="Text" />
        <TextField label="Model" type="Text" />
        <TextField label="HOC Code" type="Text" />
        <TextField
          name="motherboard"
          label="Cost Inc"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={costValues.motherboard}
          onChange={costHandleInputChange}
          onKeyUp={costHandleInputChange}
        />
        <TextField
          name="motherboard"
          label="Sell"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={sellValues.motherboard}
          onChange={sellHandleInputChange}
          onKeyUp={sellHandleInputChange}
        />
      </div>
      <div>
        <TextField label="Ram" type="Text" />
        <TextField label="Model" type="Text" />
        <TextField label="HOC Code" type="Text" />
        <TextField
          name="ram"
          label="Cost Inc"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={costValues.ram}
          onChange={costHandleInputChange}
          onKeyUp={costHandleInputChange}
        />
        <TextField
          name="ram"
          label="Sell"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={sellValues.ram}
          onChange={sellHandleInputChange}
          onKeyUp={sellHandleInputChange}
        />
      </div>
      <div>
        <TextField label="GPU" type="Text" />
        <TextField label="Model" type="Text" />
        <TextField label="HOC Code" type="Text" />
        <TextField
          name="gpu"
          label="Cost Inc"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={costValues.gpu}
          onChange={costHandleInputChange}
          onKeyUp={costHandleInputChange}
        />
        <TextField
          name="gpu"
          label="Sell"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={sellValues.gpu}
          onChange={sellHandleInputChange}
          onKeyUp={sellHandleInputChange}
        />
      </div>
      <div>
        <TextField label="SSD" type="Text" />
        <TextField label="Model" type="Text" />
        <TextField label="HOC Code" type="Text" />
        <TextField
          name="ssd"
          label="Cost Inc"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={costValues.ssd}
          onChange={costHandleInputChange}
          onKeyUp={costHandleInputChange}
        />
        <TextField
          name="ssd"
          label="Sell"
          type="number"
          inputProps={{
            maxLength: 6,
            step: "1",
          }}
          value={sellValues.ssd}
          onChange={sellHandleInputChange}
          onKeyUp={sellHandleInputChange}
        />
      </div>
      <div>
        <Typography variant="h5" gutterBottom component="div">
          Total Cost: {costTotal && costTotal}
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Cost with 20% VAT: {costTotal && (costTotal * 1.2).toFixed(2)}
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Total Sell: {sellTotal && sellTotal}
        </Typography>

        <Typography variant="h5" gutterBottom component="div">
          Sell with 20% VAT: {sellTotal && (sellTotal * 1.2).toFixed(2)}
        </Typography>
        <Button variant="contained" onClick={btnReset}>
          Reset
        </Button>
      </div>
    </Box>
  );
}
