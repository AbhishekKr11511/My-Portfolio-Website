import './skill.scss'
import data from './data.json'
import {ResponsiveBar} from '@nivo/bar'


const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
      data={data}
      keys={[
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'React-Redux',
          'TypeScript',
          'Node.js',
          'Express',
          'MongoDB',
          'Tailwind',
          'Figma',
          ''
      ]}
      indexBy="Subject"
      margin={{ top: 50, right: 150, bottom: 50, left: 200 }}
      padding={0.1}
      borderRadius={15}
      minValue={0}
      maxValue={100}
      theme={{
        "fontFamily" : 'var(--font-round)',
        "fontSize" : '1rem'
    }}
      layout='horizontal'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme:'spectral' }}
      borderWidth={2}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'brighter',
                  1.6
              ]
          ]
      }}
      // axisTop={null}
      // axisRight={null}
      // axisBottom={null}
      // axisLeft={null}
      labelSkipWidth={30}
      labelSkipHeight={30}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  10
              ]
          ]
      }}
      motionConfig="wobbly"
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e=>e.id+": "+e.formattedValue+" in Subject: "+e.indexValue}
      tooltip={({
        id,
        value,
        color
      }) => <div style={{
        padding: 12,
        color,
        background: 'black',
        borderRadius: '1rem',
        border: '2px solid white'
      }}>
                    <span className='label'>Level Of Comfort</span>
                        <br />
                        <hr />
                        <strong className='label'>
                            {id}: {value}
                        </strong>
                    </div>} />
)




const Skills = () => {
  
  return (
    <div className="skills">
      <span className='skills-title'>My Skills</span>
      <div className='skills-chart'>
        <MyResponsiveBar data={data}/>
      </div>
    </div>
  )
}
export default Skills