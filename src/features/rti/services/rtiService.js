import { rtiApi } from '../api/rtiApi';
import { RTICalculationService } from './calculationService';
import { RTIValidationService } from './validationService';

export class RTIService {
  // Load RTI by ID for editing
  static async loadRTIById(id) {
    try {
      const response = await rtiApi.getById(id);
      
      if (response.ok && response.data) {
        const master = response.data.Master[0];
        const details = response.data.Details || [];

        return {
          formData: {
            rtiNo: master.RTINo || '',
            rtiDate: master.RTIDate ? new Date(master.RTIDate) : new Date(),
            driverRefId: master.DriverRefId,
            truckRefId: master.TruckRefId,
            agentCompanyRefId: master.AgentCompanyRefId,
            agentRefId: master.AgentRefId,
            link: master.Link || '1ST LINK',
            exitLink: master.ExitLink || '1ST LINK',
            sleeping: master.Sleeping || 'NO',
            exit: master.Exit || 'NO',
            emptyDelivery: master.EmptyDelivery || 'NO',
            pickup: master.Pickup || 'NO',
            drop: master.Drop || 'NO',
            manpower: master.Manpower || 'NO',
            pickupAmount: master.PickupAmount || '',
            dropAmount: master.DropAmount || '',
            destination: master.Destination || '',
            sealBy: master.SealBy || '',
            breakSealBy: master.BreakSealBy || '',
            remarks: master.Remarks || '',
            comments: master.Comments || '',
            punctuality: master.Punctuality || false,
            documentSubmission: master.DocumentSubmission || false,
            multiplePickupHandling: master.MultiplePickupHandling || false,
            editId: master.Id,
          },
          gridData: details,
        };
      }

      throw new Error('Failed to load RTI data');
    } catch (error) {
      console.error('Error loading RTI:', error);
      throw error;
    }
  }

  // Revise RTI from Sale Order
  static async reviseFromSaleOrder(rtiId) {
    try {
      const response = await rtiApi.revise(rtiId);
      
      if (response.ok && response.data) {
        const details = response.data || [];
        return details;
      }

      throw new Error('Failed to revise RTI');
    } catch (error) {
      console.error('Error revising RTI:', error);
      throw error;
    }
  }

  // Fill item details from job number
  static async fillItemsByJobNo(jobNo, comid) {
    try {
      const response = await rtiApi.getSaleOrderById(jobNo);
      
      if (response.ok && response.data) {
        const master = response.data.Master[0];
        const details = response.data.Details || [];

        return {
          master,
          details: details.map(detail => ({
            JobNo: master.JobNo,
            CustomerName: master.CustomerName,
            JobDate: master.JobDate,
            Salary: detail.Salary || 0,
            PPIC: detail.PPIC || '',
            DPIC: detail.DPIC || '',
            PWDType: detail.PWDType || 0,
            OriginD: detail.Origin || '',
            DestinationD: detail.Destination || '',
            PickupDateD: detail.PickupDate || '',
            DeliveryDateD: detail.DeliveryDate || '',
            PickupAddressD: detail.PickupAddress || '',
            DeliveryAddressD: detail.DeliveryAddress || '',
            PickupAddressTimelistD: detail.PickupAddressTimelist || '',
            PickupAddressQuantityD: detail.PickupAddressQuantity || '',
            DeliveryAddressQuantityD: detail.DeliveryAddressQuantity || '',
            DeliveryAddressdatelistD: detail.DeliveryAddressdatelist || '',
            Sleeping: detail.Sleeping || false,
            OnTime: detail.OnTime || false,
            TruckMaintenance: detail.TruckMaintenance || false,
            DoSubmission: detail.DoSubmission || false,
            SaleOrderMasterRefId: master.Id,
            Id: 0,
            RTIMasterRefId: 0,
            EditMode: 0,
          })),
        };
      }

      return null;
    } catch (error) {
      console.error('Error filling items:', error);
      return null;
    }
  }

  // Prepare save data
  static prepareSaveData(state, gridData, comid, employeeRefId) {
    const calculations = RTICalculationService.calculate(state, gridData);

    return {
      Master: {
        Id: state.editId || 0,
        RTINo: state.rtiNo,
        RTIDate: this.formatDate(state.rtiDate),
        DriverRefId: state.driverRefId,
        TruckRefId: state.truckRefId,
        AgentCompanyRefId: state.agentCompanyRefId,
        AgentRefId: state.agentRefId,
        Link: state.link,
        ExitLink: state.exitLink,
        Sleeping: state.sleeping,
        Exit: state.exit,
        EmptyDelivery: state.emptyDelivery,
        Pickup: state.pickup,
        Drop: state.drop,
        Manpower: state.manpower,
        PickupAmount: state.pickupAmount,
        DropAmount: state.dropAmount,
        Destination: state.destination,
        SealBy: state.sealBy,
        BreakSealBy: state.breakSealBy,
        Remarks: state.remarks,
        Comments: state.comments,
        Punctuality: state.punctuality,
        DocumentSubmission: state.documentSubmission,
        MultiplePickupHandling: state.multiplePickupHandling,
        TotalAmount: calculations.totalAmount,
        Comid: comid,
        EmployeeRefId: employeeRefId,
      },
      Details: gridData.map(row => ({
        ...row,
        RTIMasterRefId: state.editId || 0,
      })),
    };
  }

  // Save RTI
  static async save(state, gridData, comid, employeeRefId) {
    // Validate
    const validation = RTIValidationService.validateForm(state, gridData);
    if (!validation.isValid) {
      throw new Error(validation.errors.join('\n'));
    }

    // Prepare data
    const saveData = this.prepareSaveData(state, gridData, comid, employeeRefId);

    // Save
    const response = await rtiApi.save(saveData);
    
    if (!response.ok) {
      throw new Error(response.message || 'Failed to save RTI');
    }

    return response;
  }

  // Delete RTI
  static async delete(id) {
    const response = await rtiApi.delete(id);
    
    if (!response.ok) {
      throw new Error(response.message || 'Failed to delete RTI');
    }

    return response;
  }

  // Format date for API
  static formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  // Format date for display
  static formatDateDisplay(date) {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
}
