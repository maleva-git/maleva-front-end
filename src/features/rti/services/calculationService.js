import { CALC_TYPES } from '../model/constants';

export class RTICalculationService {
  static calculate(state, gridData) {
    // Sum all salary from grid
    let total = 0;
    gridData.forEach(row => {
      total += parseFloat(row.Salary || 0);
    });

    // Add sleeping: YES = +50
    if (state.sleeping === 'YES') {
      total += 50;
    }

    // Add empty pickup: EMPTY 80 = +80, EMPTY 50 = +50
    if (state.exitYN === 'EMPTY 80') {
      total += 80;
    } else if (state.exitYN === 'EMPTY 50') {
      total += 50;
    }

    // Add empty delivery: EMPTY 80 = +80, EMPTY 50 = +50
    if (state.emptyDeliveryYN === 'EMPTY 80') {
      total += 80;
    } else if (state.emptyDeliveryYN === 'EMPTY 50') {
      total += 50;
    }

    // Add manpower: 1 = +50, 2 = +100
    if (state.manpw === '1') {
      total += 50;
    } else if (state.manpw === '2') {
      total += 100;
    }

    // Add pickup: YES = +30 × count
    if (state.pickup === 'YES') {
      const count = parseFloat(state.pickupCount || 0);
      total += 30 * count;
    }

    // Add drop: YES = +30 × count
    if (state.addDrop === 'YES') {
      const count = parseFloat(state.dropCount || 0);
      total += 30 * count;
    }

    return { totalAmount: parseFloat(total.toFixed(2)) };
  }

  static calculateRow(row) {
    return { ...row, Salary: parseFloat((row.Salary || 0).toFixed(2)) };
  }

  static valNum(value) {
    return parseFloat(value) || 0;
  }
}
