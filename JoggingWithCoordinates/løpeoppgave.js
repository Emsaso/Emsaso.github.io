﻿let parser = new DOMParser();
let xmlDoc = parser.parseFromString(gpx, "text/xml");
let trekPoints;
let initTime;
let initTime2;

function getDocument(sD) {
    xmlDoc = parser.parseFromString(sD, "text/xml");
    trekPoints = xmlDoc.getElementsByTagName('trkpt');
    initTime = Array.from(trekPoints[0].children).filter(p => p.tagName == 'time')[0].textContent;
    initTime2 = Array.from(trekPoints[1].children).filter(p => p.tagName == 'time')[0].textContent;
}

let text = "";
let finalValueInKm = 0;
let hypotenuse = 0;
let checkpointsPassed = 0;
let secondsBetweenCheckpoints = 0;
let estTimeSec = 0;
let estTimeSec2 = 0;
let estLatitude = 0;
let estLongitude = 0;
let totSeconds = 0;
let cpP = 0;
let ssCp = 0;
let secondCounter = 0;

function getLatLonTest(trailData, raceData, seconds) {
    // console.log(trailData[i].lat);
    // console.log(raceData[i + 1].location.lat);
    // console.log(raceData[i].location.lat);
    // console.log(seconds);
    // console.log(raceData[i + 1].time);

    let estimatedLatitude = trailData[0].lat + (
        (raceData[1].location.lat - raceData[0].location.lat) *
        seconds / raceData[1].time);

    let estimatedLongitude = trailData[0].lon + (
        (raceData[1].location.lon - raceData[0].location.lon) *
        seconds / raceData[1].time);

    return [estimatedLatitude, estimatedLongitude];
}

function getLatLonOnce(chosenSecond, exp, wth) {
    let i = 0;
    let values = getLatLon(0, exp, wth);
    let cS = chosenSecond;
    // console.log(cS, values[4], i);
    while (cS - values[4] > getLatLon(i + 1, exp, wth)[4]) {
        i++;
        cS -= values[4];
        values = getLatLon(i, exp, wth);
    }
    console.log(cS, values[4], i);
    if (cS == 0) {
        totalLatitudeEachSecond = values[0];
        totalLongitudeEachSecond = values[1];
    } else {
        totalLatitudeEachSecond = values[0] - (values[2] * (values[4] - cS)) * values[5];
        totalLongitudeEachSecond = values[1] - (values[3] * (values[4] - cS)) * values[5];
    }
    return [totalLatitudeEachSecond, totalLongitudeEachSecond]
}

function getLatLon(checkpointsPassed, experience, weather) {
    let initTimeModified = initTime.slice(0, -10);
    let initTimeModified2 = initTime2.slice(0, -10);
    initTimeModified = initTimeModified.split("-");
    initTimeModified2 = initTimeModified2.split("-");
    let secondsSinceStart = initTimeModified[1] + "/" + initTimeModified[2] + "/" + initTimeModified[0];
    let secondsSinceStart2 = initTimeModified2[1] + "/" + initTimeModified2[2] + "/" + initTimeModified2[0];
    let correctTime = (parseInt(new Date(secondsSinceStart).getTime()) + checkpointsPassed - parseInt(new Date(
        secondsSinceStart).getTime()));
    let correctTime2 = (parseInt(new Date(secondsSinceStart2).getTime()) + (checkpointsPassed + 1) - parseInt(new Date(
        secondsSinceStart2).getTime()));
    let trekPoint1 = trekPoints[parseInt(correctTime)];
    let trekPoint2 = trekPoints[parseInt(correctTime + 1)];
    let trekPoint12 = trekPoints[parseInt(correctTime2)];
    let trekPoint22 = trekPoints[parseInt(correctTime2 + 1)];
    let lat1 = trekPoint1.getAttribute('lat');
    let lat2 = trekPoint2.getAttribute('lat');
    let lon1 = trekPoint1.getAttribute('lon');
    let lon2 = trekPoint2.getAttribute('lon');
    let children1 = Array.from(trekPoint1.children);
    let children2 = Array.from(trekPoint2.children);
    let children12 = Array.from(trekPoint12.children);
    let children22 = Array.from(trekPoint22.children);
    let ele1 = children1.filter(p => p.tagName == 'ele')[0].textContent;
    let ele2 = children2.filter(p => p.tagName == 'ele')[0].textContent;
    finalValueInKm += calculateDistance(lat1, lon1, ele1, lat2, lon2, ele2);
    let intervalValue = calculateDistance(lat1, lon1, ele1, lat2, lon2, ele2);
    let time1 = Date.parse(children1.filter(p => p.tagName == 'time')[0].textContent);
    let time2 = Date.parse(children2.filter(p => p.tagName == 'time')[0].textContent);
    let time12 = Date.parse(children12.filter(p => p.tagName == 'time')[0].textContent);
    let time22 = Date.parse(children22.filter(p => p.tagName == 'time')[0].textContent);
    let timeInHours = (time2 - time1) / 3600000;
    let timeInMinutes = (time2 - time1) / 60000;
    let timeInSeconds = (time2 - time1) / 1000;
    let timeInSeconds2 = (time22 - time12) / 1000;
    let kmH = (intervalValue / timeInHours).toFixed(2);
    let latPrSec = (lat2 - lat1) / timeInSeconds;
    let lonPrSec = (lon2 - lon1) / timeInSeconds;
    let tiredness = calculateTiredness(correctTime);
    let steepness = calculateSteepness(ele1, ele2);
    let speedVariables = tiredness / experience / weather * steepness;

    let estimatedTimeInSeconds = timeInSeconds * speedVariables;
    estTimeSec = estimatedTimeInSeconds;

    let estimatedTimeInSeconds2 = timeInSeconds2 * speedVariables;
    estTimeSec2 = estimatedTimeInSeconds2;

    let estimatedKmH = (kmH / speedVariables).toFixed(2);
    let estimatedLatitude = latPrSec / speedVariables;
    let estimatedLongitude = lonPrSec / speedVariables;
    let finalLatitude = lat1 - estimatedLatitude;
    let finalLongitute = lon1 - estimatedLongitude;
    return [finalLatitude, finalLongitute, latPrSec, lonPrSec, timeInSeconds, speedVariables];
}