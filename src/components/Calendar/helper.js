const DateOperations = {
  getDaysInMonth: (currentDate) => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    return new Date(year, month, 0).getDate();
  },
  getStartDayOfMonth: (currentDate) => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    return new Date(year, month, 1).getDay();
  }
};

export default DateOperations;