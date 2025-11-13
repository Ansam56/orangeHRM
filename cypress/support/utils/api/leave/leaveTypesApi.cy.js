export default class leaveTypesApi {
  static addLeaveType(leaveType) {
    return cy.request("POST", "/api/v2/leave/leave-types", {
      ...leaveType,
    });
  }

  static getLeaveTypes() {
    return cy.request("GET", "/api/v2/leave/leave-types").then((response) => {
      return response;
    });
  }

  static deleteLeaveTypes(leaveIds) {
    return cy.request("DELETE", "/api/v2/leave/leave-types", {
      ids: leaveIds,
    });
  }
}
