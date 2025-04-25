
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppointmentList } from '@/components/AppointmentList';
import { XRayAnalysis } from '@/components/XRayAnalysis';

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    patientName: "Rahul Sharma",
    contactNumber: "+91 98765 43210",
    issue: "Severe toothache in the lower right molar. Having difficulty eating and drinking. Pain started 3 days ago.",
    date: "2025-04-28",
    time: "10:00 AM",
    paymentStatus: "paid",
    priority: "high",
  },
  {
    id: "2",
    patientName: "Priya Patel",
    contactNumber: "+91 87654 32109",
    issue: "Regular check-up and cleaning. Last visit was 6 months ago.",
    date: "2025-04-28",
    time: "11:00 AM",
    paymentStatus: "paid",
    priority: "low",
  },
  {
    id: "3",
    patientName: "Amit Kumar",
    contactNumber: "+91 76543 21098",
    issue: "Sensitivity in upper teeth when consuming cold beverages. Occasional mild pain.",
    date: "2025-04-28",
    time: "2:00 PM",
    paymentStatus: "paid",
    priority: "medium",
  },
  {
    id: "4",
    patientName: "Neha Singh",
    contactNumber: "+91 65432 10987",
    issue: "Consultation for dental implants. Lost two front teeth in an accident last month.",
    date: "2025-04-29",
    time: "10:00 AM",
    paymentStatus: "unpaid",
    priority: "medium",
  },
  {
    id: "5",
    patientName: "Vikram Malhotra",
    contactNumber: "+91 54321 09876",
    issue: "Bleeding gums while brushing. Also experiencing bad breath and slight swelling.",
    date: "2025-04-29",
    time: "3:00 PM",
    paymentStatus: "paid",
    priority: "high",
  },
  {
    id: "6",
    patientName: "Sunita Reddy",
    contactNumber: "+91 43210 98765",
    issue: "Follow-up for root canal treatment done last week. No major pain but mild discomfort.",
    date: "2025-04-30",
    time: "11:00 AM",
    paymentStatus: "paid",
    priority: "medium",
  },
];

const DoctorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  
  const filteredAppointments = mockAppointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        appointment.issue.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = priorityFilter === 'all' || appointment.priority === priorityFilter;
    
    const matchesPayment = paymentFilter === 'all' || appointment.paymentStatus === paymentFilter;
    
    return matchesSearch && matchesPriority && matchesPayment;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Doctor Dashboard</CardTitle>
          <CardDescription>
            Manage your appointments and patient records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="appointments">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="xray">X-Ray Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appointments" className="mt-4 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search patients or issues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Payment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Payments</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="unpaid">Unpaid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <AppointmentList 
                appointments={filteredAppointments} 
                onSelectAppointment={setSelectedAppointment}
              />
            </TabsContent>
            
            <TabsContent value="xray">
              {selectedAppointment ? (
                <XRayAnalysis appointment={selectedAppointment} />
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No appointment selected</h3>
                  <p className="text-gray-500">Select an appointment from the appointments tab to view X-ray analysis</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
