/*
  We need to collapse a series of values that are potentially overlapping.
  First, sort the series based on one of the values consistent among all the elements.
  Then compare the second value of the current element with the first value of the following element.
  If there is overlap, merge the two.
*/



const mergeCalendarRanges = listOfRanges => {
  let sortedMeetings = listOfRanges.slice().sort((a,b) => {
    return a.startTime < b.startTime ? -1 : 1;
  });

  let mergedMeetings = [sortedMeetings[0]];

  for (let i = 0; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) { // this line checks for overlap between start and end times
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
}
