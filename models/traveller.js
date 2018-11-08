const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
   const startPoints = this.journeys.map((journey) => {
     return journey.startLocation;})
     return startPoints;
   };

Traveller.prototype.getJourneyEndLocations = function () {
  const endPoints = this.journeys.map((journey) => {
    return journey.endLocation;})
    return endPoints;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    const result = this.journeys.filter((journey) =>{
    return journey.transport === transport});
    return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    const result = this.journeys.filter((journey) => {
      return journey.distance > minDistance;
    });
    return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
