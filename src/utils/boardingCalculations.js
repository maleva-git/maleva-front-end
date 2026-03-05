/**
 * Calculates boarding officer amounts based on officer selection
 * Logic: 
 * - If only Officer1 selected: Officer1 = 50, Officer2 = 0
 * - If only Officer2 selected: Officer1 = 0, Officer2 = 50
 * - If both selected: Officer1 = 30, Officer2 = 30
 */

export function calculateBoardingAmounts(officer1Id, officer2Id) {
  let amount1 = 0;
  let amount2 = 0;

  const hasOfficer1 = officer1Id && officer1Id !== '' && officer1Id !== null;
  const hasOfficer2 = officer2Id && officer2Id !== '' && officer2Id !== null;

  if (hasOfficer1 && !hasOfficer2) {
    amount1 = 50;
    amount2 = 0;
  } else if (!hasOfficer1 && hasOfficer2) {
    amount1 = 0;
    amount2 = 50;
  } else if (hasOfficer1 && hasOfficer2) {
    amount1 = 30;
    amount2 = 30;
  }

  return { amount1, amount2 };
}

/**
 * Calculates all boarding officer amounts for all vessel types
 */
export function calculateAllBoardingAmounts({
  boardingOfficer1,
  boardingOfficer2,
  loadingBoardingOfficer1,
  loadingBoardingOfficer2,
  offBoardingOfficer1,
  offBoardingOfficer2
}) {
  const common = calculateBoardingAmounts(boardingOfficer1, boardingOfficer2);
  const loading = calculateBoardingAmounts(loadingBoardingOfficer1, loadingBoardingOfficer2);
  const off = calculateBoardingAmounts(offBoardingOfficer1, offBoardingOfficer2);

  return {
    boardingAmount1: common.amount1,
    boardingAmount2: common.amount2,
    loadingBoardingAmount1: loading.amount1,
    loadingBoardingAmount2: loading.amount2,
    offBoardingAmount1: off.amount1,
    offBoardingAmount2: off.amount2
  };
}
