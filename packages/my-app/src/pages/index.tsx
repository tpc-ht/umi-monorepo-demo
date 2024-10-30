import yayJpg from "@/assets/yay.jpg";
// import {Button, CRM, Foo} from "@crm/components";
import {Button, CRM, Foo} from "@crm/components";

console.log("CRM", CRM)

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388"/>
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <h1>
        0------------------------------
      </h1>
      <Foo title={"hello"}/>
      <h1>
        0------------------------------
      </h1>
      <Button type={'primary'}>按钮</Button>
    </div>
  );
}
