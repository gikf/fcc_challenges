function splitCoconuts(intSailors) {
  let coconuts = 0;
  let sailorsWakes;
  let i = 1;
  while (sailorsWakes != intSailors) {
    coconuts = intSailors * i;
    for (sailorsWakes = 0; sailorsWakes < intSailors; sailorsWakes++) {
      coconuts = (intSailors * coconuts + (intSailors - 1)) / (intSailors - 1);
      if (coconuts % intSailors != 1) {
        break;
      }
    }
    i++;
  }
  return coconuts;
}
