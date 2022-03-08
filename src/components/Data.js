import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FormPropsTextFields() {
  const [priceValues, setPriceValues] = React.useState([
    { cost: "", sell: "" },
  ]);
  const [costTotal, setCostTotal] = React.useState(0);
  const [sellTotal, setSellTotal] = React.useState(0);

  const btnReset = () => {
    setPriceValues([{ cost: "", sell: "" }]);
    setCostTotal(0);
    setSellTotal(0);
  };

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;

    const list = [...priceValues];

    list[i][name] = value;
    setPriceValues(list);

    // console.log(
    //   priceValues.map((priceValue) => {
    //     return priceValue.cost;
    //   })
    // );

    const cost = priceValues.map((priceValue) => {
      return priceValue.cost;
    });

    setCostTotal(sumOfTotal(cost));

    const sell = priceValues.map((priceValue) => {
      return priceValue.sell;
    });

    setSellTotal(sumOfTotal(sell));

    // const cost = _.sumBy(priceValues, (price) => {
    //   return price.cost === "" ? 0 : parseFloat(price.cost);
    // });

    // console.log(cost);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...priceValues];
    list.splice(index, 1);
    setPriceValues(list);
  };

  const handleAddClick = () => {
    setPriceValues([...priceValues, { cost: "", sell: "" }]);
  };

  // const sellHandleInputChange = (e, index) => {
  //   const { value, name } = e.target;
  //   const list = [...priceValues];
  //   // const parsedValue = value === "" ? "" : parseFloat(value);

  //   list[index][name] = value;
  //   setPriceValues(list);

  //   console.log(priceValues);

  //   // let sum = sumOfTotal(sellValues);
  //   // setSellTotal(sum);
  //   // console.log(sellTotal);
  // };

  const sumOfTotal = (obj) => {
    // let a = Object.values(obj);
    // console.log(obj);
    let sum = _(obj)
      .map((el) => {
        return el === "" ? 0 : parseFloat(el);
      })
      .sum(obj);

    return sum;
  };

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
        <Typography variant="h5" gutterBottom component="div">
          Sell And Cost Calculator
        </Typography>
      </div>

      {priceValues.map((x, i) => {
        return (
          <Box sx={{ justifyContent: "center" }} key={i}>
            <TextField label="Component Name" type="Text" />
            <TextField label="HOC Code" type="Text" />
            <TextField
              name="cost"
              label="Cost Inc"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              value={x.cost}
              onChange={(e) => handleInputChange(e, i)}
              onKeyUp={(e) => handleInputChange(e, i)}
            />
            <TextField
              name="sell"
              label="Sell"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              value={x.sell}
              onChange={(e) => handleInputChange(e, i)}
              onKeyUp={(e) => handleInputChange(e, i)}
            />
            <IconButton
              disabled={priceValues.length !== 1 ? false : true}
              onClick={() => handleRemoveClick(i)}
            >
              <RemoveIcon fontSize="small" sx={{ margin: "1rem" }} />
            </IconButton>
            <IconButton
              // disabled={priceValues.length - 1 === i ? false : true}
              onClick={() => handleAddClick(i)}
            >
              <AddIcon fontSize="small" sx={{ margin: "1rem" }} />
            </IconButton>
          </Box>
        );
      })}

      <div>
        <Box display="flex" sx={{ justifyContent: "center", p: "1rem" }}>
          <Box sx={{ border: 1, p: "1.5rem" }}>
            <Typography variant="h5" gutterBottom component="div">
              Total Cost: {costTotal && costTotal}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              Cost with 20% VAT: {costTotal && (costTotal * 1.2).toFixed(2)}
            </Typography>
          </Box>
          <div style={{ margin: "0 1rem" }}></div>
          <Box sx={{ border: 1, p: "1.5rem" }}>
            <Typography variant="h5" gutterBottom component="div">
              Total Sell: {sellTotal && sellTotal}
            </Typography>

            <Typography variant="h5" gutterBottom component="div">
              Sell with 20% VAT: {sellTotal && (sellTotal * 1.2).toFixed(2)}
            </Typography>
          </Box>
        </Box>

        <Button variant="contained" onClick={btnReset}>
          Reset
        </Button>
      </div>
    </Box>
  );
}

// <div>
//         <TextField label="Motherboard" type="Text" />
//         <TextField label="Model" type="Text" />
//         <TextField label="HOC Code" type="Text" />
//         <TextField
//           name="motherboard"
//           label="Cost Inc"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={costValues.motherboard}
//           onChange={costHandleInputChange}
//           onKeyUp={costHandleInputChange}
//         />
//         <TextField
//           name="motherboard"
//           label="Sell"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={sellValues.motherboard}
//           onChange={sellHandleInputChange}
//           onKeyUp={sellHandleInputChange}
//         />
//       </div>
//       <div>
//         <TextField label="Ram" type="Text" />
//         <TextField label="Model" type="Text" />
//         <TextField label="HOC Code" type="Text" />
//         <TextField
//           name="ram"
//           label="Cost Inc"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={costValues.ram}
//           onChange={costHandleInputChange}
//           onKeyUp={costHandleInputChange}
//         />
//         <TextField
//           name="ram"
//           label="Sell"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={sellValues.ram}
//           onChange={sellHandleInputChange}
//           onKeyUp={sellHandleInputChange}
//         />
//       </div>
//       <div>
//         <TextField label="GPU" type="Text" />
//         <TextField label="Model" type="Text" />
//         <TextField label="HOC Code" type="Text" />
//         <TextField
//           name="gpu"
//           label="Cost Inc"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={costValues.gpu}
//           onChange={costHandleInputChange}
//           onKeyUp={costHandleInputChange}
//         />
//         <TextField
//           name="gpu"
//           label="Sell"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={sellValues.gpu}
//           onChange={sellHandleInputChange}
//           onKeyUp={sellHandleInputChange}
//         />
//       </div>
//       <div>
//         <TextField label="SSD" type="Text" />
//         <TextField label="Model" type="Text" />
//         <TextField label="HOC Code" type="Text" />
//         <TextField
//           name="ssd"
//           label="Cost Inc"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={costValues.ssd}
//           onChange={costHandleInputChange}
//           onKeyUp={costHandleInputChange}
//         />
//         <TextField
//           name="ssd"
//           label="Sell"
//           type="number"
//           inputProps={{
//             maxLength: 6,
//             step: "1",
//           }}
//           value={sellValues.ssd}
//           onChange={sellHandleInputChange}
//           onKeyUp={sellHandleInputChange}
//         />
//       </div>
