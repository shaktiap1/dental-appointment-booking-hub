
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "2:00 PM", "3:00 PM", 
  "4:00 PM", "5:00 PM", "6:00 PM"
];

const AppointmentForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    issue: "",
    date: null as Date | null,
    time: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData({ ...formData, date });
    }
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.issue.trim() !== "" &&
      formData.date !== null &&
      formData.time !== ""
    );
  };

  const handleContinue = () => {
    if (isFormValid()) {
      setShowPayment(true);
    } else {
      toast({
        title: "Please fill all required fields",
        description: "All fields are required to book your appointment",
        variant: "destructive",
      });
    }
  };

  const handlePayment = () => {
    setLoading(true);
    
    // Mock payment gateway integration
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment Successful!",
        description: "Your appointment has been booked successfully.",
      });
      
      // Reset form and state
      setFormData({
        name: "",
        phone: "",
        email: "",
        issue: "",
        date: null,
        time: "",
      });
      setShowPayment(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {!showPayment ? (
        <>
          <h2 className="text-2xl font-bold text-dental-dark mb-6">Book Your Appointment</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issue">Describe Your Dental Issue</Label>
              <Textarea
                id="issue"
                name="issue"
                placeholder="Please describe your dental problem or the treatment you're looking for..."
                value={formData.issue}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date || undefined}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Preferred Time</Label>
                <Select onValueChange={handleTimeSelect} value={formData.time}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full bg-dental-primary hover:bg-dental-primary/90" 
                onClick={handleContinue}
              >
                Continue to Payment
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                A consultation fee of ₹299 will be charged to confirm your appointment.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dental-dark mb-2">Complete Your Payment</h2>
            <p className="text-gray-600">Pay the consultation fee to confirm your appointment</p>
          </div>

          <div className="bg-dental-light p-4 rounded-lg">
            <div className="flex justify-between mb-4">
              <span className="text-dental-dark">Patient Name:</span>
              <span className="font-medium">{formData.name}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-dental-dark">Appointment:</span>
              <span className="font-medium">
                {formData.date ? format(formData.date, "PPP") : ""} at {formData.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-dental-dark">Amount:</span>
              <span className="font-bold">₹299.00</span>
            </div>
          </div>

          <div className="p-4 border-2 border-dental-accent/20 rounded-lg bg-dental-accent/5">
            <h3 className="font-semibold mb-2 text-dental-dark">Razorpay Payment Gateway</h3>
            <p className="text-sm text-gray-600 mb-4">
              You'll be redirected to Razorpay to complete your payment securely.
            </p>
            
            {/* This would be replaced by the actual Razorpay integration */}
            <Button 
              className="w-full bg-dental-accent hover:bg-dental-accent/90" 
              onClick={handlePayment} 
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay ₹299"}
            </Button>
          </div>

          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setShowPayment(false)}
            disabled={loading}
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
