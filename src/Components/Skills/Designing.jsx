import { ResponsiveBar } from "@nivo/bar";


export const MyResponsiveBarDesign = ({ data }) => (
    <ResponsiveBar
      data={data}
      keys={[
        "Adobe Creative Suite",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Ant Design",
        "Figma",
        "Sass",
        "Material UI",
      ]}
      indexBy="Subject"
      margin={{ top: 50, right: 200, bottom: 20, left: 50 }}
      padding={0.1}
      borderRadius={15}
      minValue={0}
      maxValue={100}
      theme={{
        fontFamily: "var(--font-round)",
        fontSize: "1rem",
      }}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "purples" }}
      borderWidth={2}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 1.6]],
      }}
      axisLeft={null}
      axisBottom={null}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0
    }}
      labelSkipWidth={30}
      labelSkipHeight={30}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 10]],
      }}
      motionConfig="wobbly"
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in Subject: " + e.indexValue
      }
      tooltip={({ id, value, color }) => (
        <div
          style={{
            padding: 12,
            color,
            background: "black",
            borderRadius: "1rem",
            border: "2px solid white",
          }}
        >
          <span className="label">Level Of Comfort</span>
          <br />
          <hr />
          <strong className="label">
            {id}: {value}
          </strong>
        </div>
      )}
    />
  );
  