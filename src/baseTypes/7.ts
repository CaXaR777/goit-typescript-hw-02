/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays{
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}
function isWeekend (weekday: WeekDays): boolean {
  return weekday === WeekDays.saturday || weekday === WeekDays.sunday
}
