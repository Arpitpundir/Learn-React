import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../../components/Button";

function ButtonPage(){
  return (
    <div>
      <div>
        <Button primary outline rounded><GoBell />First Button</Button>
      </div>
      <div>
        <Button outline secondary><GoCloudDownload />Second Button </Button>
      </div>
      <div>
        <Button outline success>Third Button</Button>
      </div>
      <div>
        <Button outline danger><GoDatabase />Fourth Button </Button>
      </div>
      <div>
        <Button outline warning>Fifth Button</Button>
      </div>
    </div>
  )
}