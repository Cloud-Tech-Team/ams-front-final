import { Stepper, Step, StepLabel } from "@mui/material";
import Payment from "./Payment";
import Personal from "./Personal";

// const CssTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//         // borderColor: 'black',
//         // borderWidth: 1,
//     },
// });
const steps = ["Personal Details", "Payment"];

function Form() {
  return (
    <div className="w-screen h-auto xl:h-screen bg-gradient-to-tl from-rock-blue-300 via-rock-blue-300 to-rock-blue-400 flex justify-center">
      <div className=" xl:w-[1180px] my-[30px] xl:my-auto">
        <Stepper className="xl:w-[780px] px-3 mx-auto" activeStep={0}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* <Personal /> */}
        <Payment />
      </div>
    </div>
  );
}

export default Form;
