
export const removeRepDates = (dates) => {

   const uniqueDates = [];

   dates.forEach((date) => {

      if(uniqueDates.indexOf(date.dateFormated) === -1) {
         uniqueDates.push(date.dateFormated)
      };

   });

   return uniqueDates;

};

export const sortDate = (date) => {
   date.sort((a, b) => {
      const dateFirst = moment(a, 'DD/MM/YY').format('YYMMDD');
      const dateSecond = moment(b, 'DD/MM/YY').format('YYMMDD');

      return dateFirst - dateSecond;
   });
};
