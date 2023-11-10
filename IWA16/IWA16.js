// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {

    const {firstName, surname, id, races} = athlete
    //added const, destructuring
    const date = new Date(races[races.length-1].date)
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    
    const time = races[races.length -1].time;
    // Duration of most recent race (format: hh:mm)

    const sumTime = time.reduce((acc, curr) => acc + curr, 0);
    //this line of code calculates the sum of all the numbers in the time array and stores it in the variable
   
    const section = document.querySelector('section')
    const heading2 = document.createElement('h2')
    heading2.textContent = id;
    section.appendChild(heading2)

    const dList = document.createElement('dl')
    section.appendChild(dList)

    const dtList = document.createElement('dt')
    dtList.textContent = `Athlete: ${firstName} ${surname}`
    
    const dtList2 = document.createElement('dt')
    dtList2.textContent = `Total Races: ${races.length}`
    
    const dtList3 = document.createElement('dt')
    dtList3.textContent = `Event Date: ${day} ${(MONTHS[month])} ${year}`
    
    const dtList4 = document.createElement('dt')
    dtList4.textContent = `Total Time: 00:${sumTime}`
  
    dList.appendChild(dtList)
    dList.appendChild(dtList2)
    dList.appendChild(dtList3)
    dList.appendChild(dtList4)
  }
  createHtml(data.response.data.NM372)
  createHtml(data.response.data.SV782)
  