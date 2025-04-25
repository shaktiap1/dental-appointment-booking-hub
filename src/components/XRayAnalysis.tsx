
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface XRayAnalysisProps {
  appointment: any;
}

export const XRayAnalysis: React.FC<XRayAnalysisProps> = ({ appointment }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [uploadedXRay, setUploadedXRay] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setUploadedXRay(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    
    // Mock progress animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);
  };

  // Mock analysis findings
  const mockFindings = [
    { area: "Upper Right Quadrant", issue: "Possible cavity detected in molar", severity: "Moderate", action: "Recommend filling" },
    { area: "Lower Left Quadrant", issue: "Early signs of gingivitis", severity: "Mild", action: "Recommend deep cleaning and improved oral hygiene" },
    { area: "Front Teeth", issue: "Minor enamel erosion", severity: "Mild", action: "Recommend fluoride treatment" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-dental-dark">X-Ray Analysis</h2>
          <p className="text-gray-600">Patient: {appointment.patientName}</p>
        </div>
        <Badge className={`${getPriorityClass(appointment.priority)}`}>
          {appointment.priority.charAt(0).toUpperCase() + appointment.priority.slice(1)} Priority
        </Badge>
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-dental-dark">Patient Complaint</h3>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-md">{appointment.issue}</p>
          
          {!uploadedXRay ? (
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">Upload X-Ray image for analysis</p>
              <div className="mt-4">
                <label htmlFor="x-ray-upload" className="cursor-pointer">
                  <Button variant="outline" className="relative">
                    Upload X-Ray
                    <input
                      id="x-ray-upload"
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileUpload}
                    />
                  </Button>
                </label>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img 
                src={uploadedXRay} 
                alt="Uploaded X-Ray" 
                className="rounded-md w-full h-auto max-h-80 object-contain"
              />
              <div className="absolute top-2 right-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/80 hover:bg-white"
                  onClick={() => setUploadedXRay(null)}
                >
                  Change
                </Button>
              </div>
            </div>
          )}
          
          {uploadedXRay && !isAnalyzing && !analysisComplete && (
            <Button className="w-full bg-dental-primary hover:bg-dental-primary/90" onClick={startAnalysis}>
              Analyze X-Ray
            </Button>
          )}
          
          {isAnalyzing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analyzing X-Ray...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
              <p className="text-xs text-gray-500 text-center animate-pulse-slow">
                AI is examining the image for dental issues
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-dental-dark">AI Analysis Results</h3>
          
          {!analysisComplete ? (
            <div className="border rounded-md p-6 text-center h-64 flex flex-col items-center justify-center text-gray-500">
              {uploadedXRay ? (
                isAnalyzing ? (
                  <p>Analysis in progress...</p>
                ) : (
                  <p>Click "Analyze X-Ray" to start AI analysis</p>
                )
              ) : (
                <p>Upload an X-Ray image to see analysis results</p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Analysis Summary</CardTitle>
                  <CardDescription>Generated from AI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockFindings.map((finding, index) => (
                      <div key={index} className="border-l-4 border-dental-primary pl-3 py-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-dental-dark">{finding.area}</h4>
                          <Badge className={getSeverityClass(finding.severity)}>
                            {finding.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{finding.issue}</p>
                        <p className="text-sm text-dental-primary mt-1"><strong>Recommendation:</strong> {finding.action}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-gray-500">
                    AI analysis is for assistance only. Clinical judgment is required.
                  </p>
                </CardFooter>
              </Card>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="w-1/2">Print Report</Button>
                <Button className="w-1/2 bg-dental-primary hover:bg-dental-primary/90">Save to Patient Record</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper functions
const getPriorityClass = (priority: string) => {
  switch(priority) {
    case 'high':
      return 'bg-red-500 hover:bg-red-600';
    case 'medium':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'low':
      return 'bg-green-500 hover:bg-green-600';
    default:
      return 'bg-blue-500 hover:bg-blue-600';
  }
};

const getSeverityClass = (severity: string) => {
  switch(severity.toLowerCase()) {
    case 'severe':
      return 'bg-red-100 text-red-800 hover:bg-red-200';
    case 'moderate':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
    case 'mild':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    default:
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
  }
};
