import { ResponsiveBar } from "@nivo/bar";


export const MyResponsiveBarSkills = ({ data }) => (
    <ResponsiveBar
      data={data}
      keys={[
        "HTML",
        "JavaScript",
        "React",
        "React-Redux",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
      ]}
      reverse={true}
      indexBy="Subject"
      margin={{ top: 50, right: 50, bottom: 50, left: 200 }}
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
      colors={{ scheme: "blue_purple" }}
      borderWidth={2}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 1.6]],
      }}
      // axisTop={null}
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
)