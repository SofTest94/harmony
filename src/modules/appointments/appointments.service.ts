import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointments, AppointmentsDocument } from './schema/appointments.schema';
import { AppointmentsDTO } from './dto/appointments.dto';


@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointments.name)
    private appointmentModule: Model<AppointmentsDocument>
  ) {}

  async getAll() {
    return await this.appointmentModule.find().exec();
  }

  async create(appointments: AppointmentsDTO) {
    try {
      const created_appointment = await this.appointmentModule.create(appointments);

      return [
        {
          status: 200,
          message: 'success',
          items: created_appointment,
        },
      ];
    } catch (error) {
      return [
        {
          status: 500,
          message: error.message,
          items: [],
        },
      ];
    }
  }
  async update(id: string, updatedAppointmentData: Partial<AppointmentsDTO>) {
    try {
      const updatedAppointment = await this.appointmentModule.findByIdAndUpdate(id, updatedAppointmentData, { new: true });
      return [
        {
          status: 200,
          message: 'success',
          items: updatedAppointment,
        },
      ];
    } catch (error) {
      return [
        {
          status: 500,
          message: error.message,
          items: [],
        },
      ];
    }
  }
  async delete(id: string) {
    try {
      let response = [];
      let status, message;
      const deletedAppointment = await this.appointmentModule.findByIdAndDelete(id);

      if (!deletedAppointment) {
        status = 404;
        message = 'Appointment with ID ${id} not found';
      } else {
        status = 200;
        message = 'success';
      }
      return [
        {
          status,
          message,
        },
      ];
    } catch (error) {
      return [
        {
          status: 500,
          message: 'Error: ' + error.message,
        },
      ];
    }
  }
}
