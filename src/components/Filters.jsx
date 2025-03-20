import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
const list = ["all", "table", "chairs", "kids", "sofas", "beds"];
const Filters = () => {
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type={"search"}
        label={"search product"}
        name={"search"}
        size={"input-sm"}
      />

      <FormSelect
        type={"select"}
        label={"select"}
        name={"select"}
        defaultValue={"men"}
        size={"input-sm"}
        list={list}
      />


      
      <FormSelect
        type={"select"}
        label={"select"}
        name={"select"}
        defaultValue={"men"}
        size={"input-sm"}
        list={list}
      />
      <FormSelect
        type={"select"}
        label={"select"}
        name={"select"}
        defaultValue={"men"}
        size={"input-sm"}
        list={list}
      />

      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
