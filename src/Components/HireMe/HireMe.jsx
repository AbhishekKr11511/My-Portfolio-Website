import "./hire.scss";
import data from "./data.json";
import { ResponsiveRadar } from "@nivo/radar";

const MyResponsiveRadar = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={["Me", "Others"]}
    indexBy="SoftSkill"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 50, left: 80 }}
    borderColor={{ from: "color" }}
    gridLabelOffset={6}
    theme={{
        "fontFamily" : 'var(--font-round)',
        "fontSize" : '1.2rem',
    }}
    gridLevels={10}
    maxValue={100}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={10}
    colors={{ scheme: "paired" }}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: "top-left",
        data: [
          {
            id: "Me",
            label: "My Soft Skills",
          },
          {
            id: "Others",
            label: "Other's Soft Skills",
          }
        ],
        direction: "column",
        itemHeight: 15,
        itemTextColor: "#333",
        itemWidth: 56,
        itemsSpacing: 12,
        symbolShape: "circle",
        symbolSize: 10,
      },
    ]}
  />
);

const HireMe = () => {
  return (
    <div className="hire">
      <span className="hire-title">Why hire me?</span>
      <div className="hire-radar">
        <MyResponsiveRadar data={data} />
      </div>
    </div>
  );
};
export default HireMe;
