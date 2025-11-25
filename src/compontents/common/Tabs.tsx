import { NavLink, useSearchParams } from "react-router-dom";
import Button from "./Button";
import type { PagesProps } from "@/typs";

type TabsMode = "routing" | "filter";

const Tabs = ({
  pages,
  mode = "routing",
  paramName = "tab",
}: {
  pages: PagesProps[];
  mode?: TabsMode;
  paramName?: string; // اسم search param مثل ?tab=
}) => {
  const [params, setParams] = useSearchParams();
  const activeFilter = params.get(paramName);

  const handleFilterClick = (value: string | undefined) => {
    if (!value) return;
    params.set(paramName, value);
    setParams(params);
  };

  return (
    <section className="flex justify-center flex-wrap my-5">
      {pages.map((ele, index) => {
        const radius =
          index === 0
            ? "rounded-r-lg"
            : index === pages.length - 1
            ? "rounded-l-lg"
            : "rounded-none";

        // ✔️ Routing Mode
        if (mode === "routing") {
          return (
            <NavLink to={ele.path} end key={index}>
              {({ isActive }) => (
                <Button
                  size={window.innerWidth >= 765 ? "large" : "small"}
                  style={isActive ? "solid" : "outline"}
                  width="full"
                  additionalStyle={radius}
                >
                  {ele.title}
                </Button>
              )}
            </NavLink>
          );
        }

        // ✔️ Filter Mode
        return (
          <button key={index} onClick={() => handleFilterClick(ele.value!)}>
            <Button
              size={window.innerWidth >= 765 ? "large" : "small"}
              style={activeFilter === ele.value ? "solid" : "outline"}
              width="full"
              additionalStyle={radius}
            >
              {ele.title}
            </Button>
          </button>
        );
      })}
    </section>
  );
};

export default Tabs;
