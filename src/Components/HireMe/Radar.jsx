import { ResponsiveRadar } from "@nivo/radar";

export const MyResponsiveRadar = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={["Me", "Others"]}
    indexBy="SoftSkill"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 40, bottom: 50, left: 80 }}
    borderColor={{ from: "color" }}
    borderWidth={2}
    gridLabelOffset={26}
    theme={{
        "fontFamily" : 'var(--font-round)',
        "fontSize" : '1.2rem',
    }}
    gridLevels={10}
    maxValue={100}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={10}
    colors={{ scheme: "category10" }}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: "top-left",
        data: [
          {
            id: "Me",
            label: "My Skills",
          },
          {
            id: "Others",
            label: "Other's  Skills",
          }
        ],
        direction: "column",
        itemHeight: 25,
        itemTextColor: "#333",
        itemWidth: 56,
        itemsSpacing: 12,
        symbolShape: "circle",
        symbolSize: 10,
      },
    ]}
  />
);