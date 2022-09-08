import React, { Component } from 'react';
import {Button, Typography, Divider, Item, Container, Stack, Slider, FormLabel, FormControl, InputLabel, Select, MenuItem, CircularProgress, Snackbar, Alert} from '@mui/material';
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'
import './App.css';

// Style sheet
const formLabelStyling = {
  color: "rgb(0, 0, 0)",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden"
};

const sliderLabelNumberOfFilesStyling = {
  color: "rgb(0, 0, 0)",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginTop: "-10px !important"
}

const MIDISelectLabel = {
  color: "rgb(0, 0, 0)",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}

const lowerMIDIPanel = {
  marginTop: "35px",
}

const upperPanelStyling = {
  marginTop: "25px",
  justifyContent: "center"
}

const lowerPanelStyling = {
  marginTop: "20px",
  justifyContent: "center"
}

const sliderMemoryLengthStyling = {
  color: "rgb(0, 0, 0)",
  marginTop: "-10px !important"
}

const generateButtonStyling = {
  color: "rgb(255, 240, 230)",
  backgroundColor: "rgb(0, 0, 0)"
}

const downloadButtonStyling = {
  width: "50%",
  height: "50%",
  color: "rgb(255, 240, 230)",
  backgroundColor: "rgb(0, 0, 0)",
  top: "50px"
}

class App extends Component {

  constructor(props) {
    super(props); // check why? study

    this.state = {
      currentMidi: {},
      synths: [],
      isPlaying: false,

      // Snackbar
      openSnackbar: false,
      verticalSnackbar: 'bottom',
      horizontalSnackbar: 'left',

      generationWaitingForResponse: false,

      memoryLength: 100,
      numberOfFiles: 1,
      temperature: 0.95,
      downloadDisabled: true, //true
      selectedMIDI: {},
      success: false,
      filesArray: []
      // Note: think carefully before initializing state based on props!
    }

    this.player = React.createRef();

    this.parseFile = this.parseFile.bind(this)
    this.setCurrentMIDI = this.setCurrentMIDI.bind(this)
    this.memLengthHandler = this.memLengthHandler.bind(this)
    this.numFilesHandler = this.numFilesHandler.bind(this)
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


  // Generate with TransformerGAN
  async generate() {
    //aconsole.log("to config -> ", this.state.memoryLength, this.state.numberOfFiles)

    // TODO -> clean MIDI data arrays, etc
    
    // MAIN
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

  

  render() {
    return (
      <div className="App">

        <Typography variant="h1" component="h2">
          ChordGAN
        </Typography>;
        
        <header className="App-header">
        {/*<h1 className="App-title">ChordGAN</h1>*/}
          <h4>Generative Adversarial Neural Networks for Random and Complex Chord Progression Generation</h4>
        </header>
        
        <Container maxWidth="sm">

          <div className='upper-panel'>
            <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />} sx={upperPanelStyling} >
              <FormLabel id="slider1Label" sx={formLabelStyling}> Memory Length </FormLabel>
              <Slider 
                sx={sliderMemoryLengthStyling}
                aria-label="MemoryLength" 
                valueLabelDisplay="auto" 
                min={100} max={2070} step={10} 
                value={this.state.memoryLength} 
                onChange={this.memLengthHandler}
              />
              
              <FormLabel id="slider2Label" sx={sliderLabelNumberOfFilesStyling}> Number of Files </FormLabel>
              <Slider 
                sx={sliderMemoryLengthStyling} 
                aria-label="NumberOfFiles" 
                valueLabelDisplay="auto" 
                min={1} max={5} step={1} 
                value={this.state.numberOfFiles} 
                onChange={this.numFilesHandler}
              />

              <FormLabel id="slider3Label" sx={sliderLabelNumberOfFilesStyling}> Temperature</FormLabel>
              <Slider 
                sx={sliderMemoryLengthStyling} 
                aria-label="Temperature" 
                valueLabelDisplay="auto"
                min={0.80} max={1.20} step={0.01} 
                value={this.state.temperature} 
                onChange={this.temperatureHandler}
              />
            </Stack>

            <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />} sx={lowerPanelStyling} >
              <Button variant="text" className='Generate-Button' sx={generateButtonStyling} onClick={this.generate}>Generate</Button>
              {/* <Button href="http://localhost:5000/get-files" disabled={this.state.downloadDisabled} variant="contained" className='Download-Button' sx={generateButtonStyling} download="generated.zip">Download</Button> */}
            </Stack>
          </div>

          {this.state.success ? 

            <>
              <div className='lower-panel'>
                <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />} sx={lowerMIDIPanel} >
                  <FormLabel id="MIDISelectLabel" sx={MIDISelectLabel}> Select a file and press play to hear an audio preview </FormLabel>
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
                
                <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />} sx={lowerPanelStyling} >

                  <div>
                    <tone-content>
                      <tone-play-toggle
                        ref={this.player}
                        disabled={this.state.isPlaying}
                        onClick={this.playSelectedFile}
                      >
                      </tone-play-toggle>
                    </tone-content>
                  </div>
                  <Button href='http://localhost:5000/getFile/' disabled={this.state.selectedMIDI && false} variant="text" className='Download-Button' sx={downloadButtonStyling} download={this.state.selectedMIDI}>Download Selected</Button>
                  <Button href="http://localhost:5000/get-files" disabled={this.state.downloadDisabled} variant="text" className='Download-Button' sx={downloadButtonStyling} download="generated.zip">Download All</Button>
                </Stack>
                
                <br></br>
                <br></br>
                <p>{JSON.stringify(this.state)}</p>
              </div>
            </>
            :
            <>
              <div className='lower-panel'>
                {this.state.generationWaitingForResponse &&
                  <CircularProgress size={90} color="inherit" />
                }
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

        </Container>
        

      </div>
    );
  }
}

export default App;