
//we will choose ifAvailable or ifNotAvailable based on Math.random
function callProcess(name, ifAvailable, ifNotAvailable) {
  //Rundom number, true if more then 0.5
  const isAvailable = Math.random() > 0.5; 

  if (isAvailable) {
    // if true
    // means available
    ifAvailable(name);
    return
  }
  // else not available
  ifNotAvailable(name);
}

function takeCall(name) {
  console.log("dialing")
};

function message(name) {
  console.log("voice message");
}

function video(name) {
  console.log("video");
}

callProcess("Ivan", takeCall, message);