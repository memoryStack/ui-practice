import './experiment.css'

const Experiment = () => {
  return (
    <div style={{
      display: 'flex',
      height: 300,
      width: 600,
      backgroundColor: 'aqua',
    }}>
      <div style={{
        flexGrow: 0.5,
        flexBasis: 0,
        backgroundColor: 'red',
        // overflow: 'auto'
        overflow: 'visible'
      }}>
        ksdjhg  kfgjsff sd
      </div>

      <div style={{
        flexGrow: 1,
        flexBasis: 100,
        backgroundColor: 'green',
      }}>
      </div>

      <div style={{
        flexGrow: 1,
        flexBasis: 100,
        backgroundColor: 'yellow',
      }}>
      </div>

    </div>
  )
}

export default Experiment;

/*
  what i learned from this example 
    1. use of user-select property
    2. cursor property
*/
