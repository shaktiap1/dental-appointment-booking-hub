
import React from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Appointment {
  id: string;
  patientName: string;
  contactNumber: string;
  issue: string;
  date: string;
  time: string;
  paymentStatus: 'paid' | 'unpaid';
  priority: 'high' | 'medium' | 'low';
}

interface AppointmentListProps {
  appointments: Appointment[];
  onSelectAppointment: (appointment: Appointment) => void;
}

export const AppointmentList: React.FC<AppointmentListProps> = ({ 
  appointments,
  onSelectAppointment 
}) => {
  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case 'high':
        return 'appointment-high';
      case 'medium':
        return 'appointment-medium';
      case 'low':
        return 'appointment-low';
      default:
        return '';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return (
          <Badge className="bg-red-500 text-white hover:bg-red-600">
            High Priority
          </Badge>
        );
      case 'medium':
        return (
          <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">
            Medium Priority
          </Badge>
        );
      case 'low':
        return (
          <Badge className="bg-green-500 text-white hover:bg-green-600">
            Low Priority
          </Badge>
        );
      default:
        return null;
    }
  };

  const getPaymentBadge = (status: string) => {
    return status === 'paid' ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
        Paid
      </Badge>
    ) : (
      <Badge variant="outline" className="border-red-300 text-red-500 hover:bg-red-50">
        Unpaid
      </Badge>
    );
  };
  
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="space-y-4">
      {appointments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No appointments found</p>
        </div>
      ) : (
        appointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className={`appointment-card ${getPriorityClass(appointment.priority)}`}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg text-dental-dark">{appointment.patientName}</h3>
                <p className="text-gray-600">{appointment.contactNumber}</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0">
                {getPriorityBadge(appointment.priority)}
                {getPaymentBadge(appointment.paymentStatus)}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Dental Issue</h4>
              <p className="text-dental-dark">{appointment.issue}</p>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">
                  {formatDate(appointment.date)} at {appointment.time}
                </span>
              </div>
              
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button 
                  variant="outline"
                  className="border-dental-primary text-dental-primary hover:bg-dental-primary/5"
                  onClick={() => onSelectAppointment(appointment)}
                >
                  View Details
                </Button>
                <Button className="bg-dental-primary hover:bg-dental-primary/90">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
