import React, { Component } from 'react';
import generateVideo from '../assets/generateVideo.mp4'
import {
  Button,
  Typography,
  Divider,
  Item,
  Container,
  Stack,
  Slider,
  FormLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material';
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'
import { styled } from '@mui/material/styles';
import '../Generate.css';




const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#272727',
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  marginTop: "-10px !important",
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#f2f2f2',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 10,
    background: 'unset',
    padding: 0,
    width: 30,
    height: 30,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#858585',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -85%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

const CustomFormLabel = styled(FormLabel)(({ theme }) => ({

  color: '#272727',
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: 'hidden',

}));



const CustomButton = styled(Button)(({ theme }) => ({
  color: "#fdfdfd",
  backgroundColor: "#272727",
  textAlign: "center",
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#858585',
    color: '#fdfdfd',
  },


}));

class Generate extends Component {
  constructor(props) {
    super(props); // check why? study

    this.state = {
      currentMidi: {},
      synths: [],
      isPlaying: false,

      generationWaitingForResponse: false,

      memoryLength: 100,
      numberOfFiles: 1,
      temperature: 0.95,
      downloadDisabled: true, //true
      selectedMIDI: {},
      success: false,
      filesArray: [],
      // Note: think carefully before initializing state based on props!

      // ESTILOS
      // Snackbar
      openSnackbar: false,
      verticalSnackbar: 'bottom',
      horizontalSnackbar: 'left',
    }

    this.player = React.createRef();

    this.parseFile = this.parseFile.bind(this)
    this.setCurrentMIDI = this.setCurrentMIDI.bind(this)
    this.memLengthHandler = this.memLengthHandler.bind(this)
    this.numFilesHandler = this.numFilesHandler.bind(this)
    this.temperatureHandler = this.temperatureHandler.bind(this)
    this.generate = this.generate.bind(this)
    this.selectedMIDIHandler = this.selectedMIDIHandler.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.playSelectedFile = this.playSelectedFile.bind(this)
    this.parseFile = this.parseFile.bind(this)
  }



  async componentDidMount() {
    // TONEJS
    if (
        !(
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob
        )
    ) {
      document.querySelector("#FileDrop #Text").textContent =
          "Reading files not supported by this browser";
    } else {
      const fileDrop = document.querySelector("#FileDrop");
    }

  }


  // BACKEND

  // Generate with TransformerGAN
  async generate() {
    //aconsole.log("to config -> ", this.state.memoryLength, this.state.numberOfFiles)

    // TODO -> clean MIDI data arrays, etc

    // MAIN!!!!!!! do not delete!!!
    /*

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ memoryLength: this.state.memoryLength, numberOfFiles: this.state.numberOfFiles })
    };

    var generateResponse = ""
    this.setState({generationWaitingForResponse: true, success: false, downloadDisabled: true})

    await fetch('/config_inference', requestOptions).catch(error => {
      console.log(error);
      this.setState({generationWaitingForResponse: false})
      this.handleClick()
    }).then(response => response.json()).catch(error => {
      console.log(error);
      this.setState({generationWaitingForResponse: false})
      this.handleClick()
    }).then(data => console.log("config update:",data))
    .catch(error => {
      console.log(error);
      this.setState({generationWaitingForResponse: false})
      this.handleClick()
    })
    .then(
      fetch('/generate').catch(error => {
        console.log(error);
        this.setState({generationWaitingForResponse: false})
        this.handleClick()
      })
      .then(response => response.json()).catch(error => {
        console.log(error);
        this.setState({generationWaitingForResponse: false})
        this.handleClick()
      })
      .then(data => {
        console.log("GENERATION RESPONSE!", data);
        generateResponse = data;

        if (generateResponse == "200" || generateResponse == 200) {
          this.setState({generationWaitingForResponse: false})
          this.setState({downloadDisabled: false})
          // Load dropdown options with generated data
          fetch('/ListMidiFiles').then(response => response.json()).then(data => this.setState({success: true, filesArray: data})).then(data => console.log("FILES ARRAY:", data))
        }
        else {
          console.log("ERROR when generating: ", generateResponse)
          this.setState({generationWaitingForResponse: false})
          this.handleClick()
        }
      }),
    ).catch(error => {
      console.log(error);
      this.setState({generationWaitingForResponse: false})
      this.handleClick()
    });
    */

    // DUMMY WORKFLOW FOR UI DEVELOPMENT!
    this.setState({generationWaitingForResponse: true, success: false, downloadDisabled: true})

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(5000);

    this.setState({generationWaitingForResponse: false})
    console.log("GENERATION RESPONSE!");

    this.setState({generationWaitingForResponse: false})
    this.setState({downloadDisabled: false})

    this.setState({success: true, filesArray:[] })

  }

  async downloadAll() {
    console.log("Download ... ")

    fetch('/get-files', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log("DOWNLOAD RESPONSE", response)
      var a = response.body.getReader();
      a.read().then(({ done, value }) => {
            saveAsFile(new TextDecoder("utf-8").decode(value), 'generated.zip');
          }
      );
    });

    function saveAsFile(text, filename) {
      // Step 1: Create the blob object with the text you received
      const type = 'application/text'; // modify or get it from response
      const blob = new Blob([text], {type});

      // Step 2: Create Blob Object URL for that blob
      const url = URL.createObjectURL(blob);

      // Step 3: Trigger downloading the object using that URL
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click(); // triggering it manually
    }

  }

  // MIDI
  async selectedMIDIHandler(e, obj) {
    await this.setState({selectedMIDI: obj.props.value})
    console.log("Selected MIDI: ", this.state.selectedMIDI)
    console.log("STATE", this.state)

    function download(blob, filename, willDownload) {
      if (willDownload) {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
      else{
        const url = window.URL.createObjectURL(blob);
        console.log("url",url)
        console.log("blob", blob)
      }
    }

    // LOAD SELECTED FILE
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: obj.props.value })
    };
    await fetch('/getFile', requestOptions).then((response) => {
      //console.log(response)
      response.blob().then((blob) => {
        download(blob,obj.props.value, false)
        this.parseFile(blob)
      })
    })

  }

  // TONEJS
  async parseFile(file) {
    //read the file
    const reader = new FileReader();
    var midi = null;
    reader.onload = function (e) {
      midi = new Midi(e.target.result);
      document
          .querySelector("tone-play-toggle")
          .removeAttribute("disabled");
      this.setCurrentMIDI(midi);
    }.bind(this);
    reader.readAsArrayBuffer(file);
  }

  async setCurrentMIDI(midi) {
    await this.setState({currentMidi: midi})
  }

  // TONEJS
  async playSelectedFile() {
    const midi = this.state.currentMidi
    console.log("midi", midi)

    let synths = []
    if (midi != null) {

      if (this.player.current.playing == true) {
        const now = Tone.now() + 0.5
        const synth = new Tone.PolySynth(Tone.Synth, {
          envelope: {
            attack: 0.02,
            decay: 0.1,
            sustain: 0.3,
            release: 1
          }
        }).toDestination()
        synths = [synth]
        //schedule all of the events
        var cont = 0
        midi.tracks[0].notes.forEach(note => {
          synth.triggerAttackRelease(note.name, note.duration, note.time + now, note.velocity)
        })
        console.log(this.player)
        this.player.current.disabled = true
        this.player.current.hidden = true
        await new Promise(r => setTimeout(r, midi.duration*1000));
        this.player.current.playing = false
        this.player.current.disabled = false
        this.player.current.hidden = false
      } else {
        //dispose the synth and make a new one
        while (synths.length > 0) {
          const synth = synths.shift()
          console.log(synth.context.state)
          synth.disconnect();
        }
      }

    }
  }










  // UI

  // Snackbar handlers
  handleClick = () => {
    this.setState({openSnackbar: true});
  };
  handleClose = () => {
    this.setState({openSnackbar: false});
  };

  // onChange handlers
  memLengthHandler(e, value) {
    this.setState({memoryLength: value})
  }
  numFilesHandler(e, value) {
    this.setState({numberOfFiles: value})
  }
  temperatureHandler(e, value) {
    this.setState({temperature: value})
  }



  render() {
    return (


        <div className="App">
          <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left:'50%',
            top:'65%',
            height:'200%',
            objectFit: 'cover',
            transform: 'translate(-50%,-50%)',
            zIndex: '-1'
          }}
          >
            <source src={generateVideo} type="video/mp4" />
          </video>

          <Container maxWidth='sm'>
            <Card sx={{backgroundColor: '#999999', marginY:7, borderRadius:12, boxShadow: "-10px 10px 10px rgb(126,126,126)"}}>
            <CardContent>
          <Typography style={{textAlign: "center", padding:"10px"}} variant="h1" component="h2">
            ChordGAN
          </Typography>
          <header className="App-header">
            {/*<h1 className="OldApp-title">ChordGAN</h1>*/}
            <Typography sx={{color: '#fdfdfd', textAlign:'justify', paddingX:2, fontFamily: 'sans-serif', fontSize:'15px'}} >Generative Adversarial Neural Networks for Random and Complex Chord Progression Generation</Typography>
          </header>


            <div className='upper-panel'>
              <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />} className='upperPanelStyling' >
                <FormLabel id="slider1Label"  > Memory Length </FormLabel>
                <CustomSlider
                    aria-label="MemoryLength"
                    valueLabelDisplay="auto"
                    min={100} max={2070} step={10}
                    value={this.state.memoryLength}
                    onChange={this.memLengthHandler}
                />

                <FormLabel id="slider2Label" > Number of Files </FormLabel>
                <CustomSlider
                    aria-label="NumberOfFiles"
                    valueLabelDisplay="auto"
                    min={1} max={5} step={1}
                    value={this.state.numberOfFiles}
                    onChange={this.numFilesHandler}
                />

                <FormLabel id="slider3Label" > Temperature </FormLabel>
                <CustomSlider
                    aria-label="Temperature"
                    valueLabelDisplay="auto"
                    min={0.80} max={1.20} step={0.01}
                    value={this.state.temperature}
                    onChange={this.temperatureHandler}
                />

              </Stack>

              <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />} className='lowerPanelStyling' >
                <CustomButton variant="text"  onClick={this.generate} sx={{marginBottom:3}}>Generate</CustomButton>
                {/* <Button href="http://localhost:5000/get-files" disabled={this.state.downloadDisabled} variant="contained" className='Download-Button' sx={generateButtonStyling} download="generated.zip">Download</Button> */}
              </Stack>
            </div>

            {this.state.success ?

                <>
                  <div className='lower-panel'>
                    <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />} className='lowerMIDIPanel' >
                      <CustomFormLabel id="MIDISelectLabel" sx={{marginTop:-3}}> Select a file and press play to hear an audio preview </CustomFormLabel>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">MIDI</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={this.selectedMIDIHandler}
                        >

                          {this.state.filesArray.map(item => {
                            return <MenuItem value={item}>{item}</MenuItem>;
                          })}

                        </Select>
                      </FormControl>
                    </Stack>

                    <Stack direction="row" spacing={1} className='lowerPanelStyling' >

                      <div className='customPlayer'>
                        <tone-content>
                          <tone-play-toggle
                              ref={this.player}
                              disabled={this.state.isPlaying}
                              onClick={this.playSelectedFile}
                          >
                          </tone-play-toggle>
                        </tone-content>
                      </div>
                      <div className='downloadButtonStyling'>
                        <CustomButton href='http://localhost:5000/getFile/' disabled={this.state.selectedMIDI && false} variant="text"  download={this.state.selectedMIDI}>Download Selected</CustomButton>
                      </div>
                      <div className='downloadButtonStyling'>
                        <CustomButton href="http://localhost:5000/get-files" disabled={this.state.downloadDisabled} variant="text" className='Download-Button'  download="generated.zip">Download All</CustomButton>
                      </div>
                    </Stack>

                    <br></br>
                    <br></br>
                    {/* <p>{JSON.stringify(this.state)}</p> */}
                  </div>
                </>
                :
                <>
                  <div className='lower-panel-2' >
                    <div style={{textAlign: "center"}}>
                      {this.state.generationWaitingForResponse &&
                      <CircularProgress className='border' thickness={18} size={90} color="inherit" sx={{marginBottom:3}}/>
                      }
                    </div>

                  </div>
                  <Snackbar
                      anchorOrigin={{'vertical':this.state.verticalSnackbar, 'horizontal':this.state.horizontalSnackbar}}
                      open={this.state.openSnackbar}
                      onClose={this.handleClose}
                  >
                    <Alert onClose={this.handleClose} severity="error" sx={{ width: '100%' }}>
                      An error occured when trying to generate data
                    </Alert>
                  </Snackbar>

                </>
            }
            </CardContent>
            </Card>
          </Container>
        </div>


    );
  }
}

export default Generate;