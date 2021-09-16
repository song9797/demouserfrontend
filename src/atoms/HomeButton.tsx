import { Button } from "@material-ui/core";
// history Param 어떻게 받지
export default function BackButton():JSX.Element{
    const goBack = () => {
        history.back();
    }
    return(
        <Button onClick={goBack}>
            Back
        </Button>
    )
};