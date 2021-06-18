const sequelize = require('../db/connection');
const createUserModel = require('./users');
const createMessageModel = require('./messages');


const UserModel = createUserModel(sequelize);
const MessageModel = createMessageModel(sequelize);

// associate({
//   Appointment: AppointmentModel,
//   City: CityModel,
//   Clinic: ClinicModel,
//   Diagnosis: DiagnosisModel,
//   Doctor: DoctorModel,
//   Document: DocumentModel,
//   Message: MessageModel,
//   Notification: NotificationModel,
//   User: UserModel,
//   Geolocation: GeolocationModel,
//   Permission: PermissionModel,
//   UserPermission: UserPermissionModel,
//   Specialization: SpecializationModel,
//   UserSpecialization: UserSpecializationModel,
//   Profession: ProfessionModel,
// });
module.exports = {UserModel,MessageModel};
