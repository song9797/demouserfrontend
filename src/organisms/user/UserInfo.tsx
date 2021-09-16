import { UserProps } from "./interfaces/userInterface";
import { useStyles } from "./styles/styles";

export default function UserInfo(data: UserProps): JSX.Element{
    const{ id, name, phonenumber, address} = data;
    const classes = useStyles();
    return(
        <div>
            
        </div>
    )
}