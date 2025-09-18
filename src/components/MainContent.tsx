import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Settings } from "lucide-react";
import { useState } from "react";
import InternshipCard from "./InternshipCard";
import MatchImprovementModal from "./MatchImprovementModal";

const MainContent = () => {
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const internships = [
    {
      company: "DABUR INDIA LIMITED",
      internshipId: "PMIS-2025-18124",
      title: "Sales Interns",
      areaField: "Sales & Marketing",
      state: "GUJARAT",
      district: "Surat",
      benefits: "Other",
      candidatesApplied: 0,
      tag: "FMCG (Fast-Moving Consumer Goods)",
      recommendation: 95
    },
    {
      company: "HDFC BANK LIMITED", 
      internshipId: "PMIS-2025-22651",
      title: "Sales Officer SLI",
      areaField: "Sales & Marketing",
      state: "WEST BENGAL",
      district: "DINAJPUR DAKSHIN",
      benefits: "Other",
      candidatesApplied: 0,
      tag: "Banking and Financial Services"
    },
    {
      company: "DABUR INDIA LIMITED",
      internshipId: "PMIS-2025-18123",
      title: "Sales Interns",
      areaField: "Sales & Marketing", 
      state: "GUJARAT",
      district: "Deogharh Dwarka",
      benefits: "Other",
      candidatesApplied: 0,
      tag: "FMCG (Fast-Moving Consumer Goods)",
      recommendation: 88
    },
    {
      company: "DABUR INDIA LIMITED",
      internshipId: "PMIS-2025-18121",
      title: "Sales Interns",
      areaField: "Sales & Marketing",
      state: "GUJARAT", 
      district: "Surat",
      benefits: "Other",
      candidatesApplied: 0,
      tag: "FMCG (Fast-Moving Consumer Goods)"
    },
    {
      company: "DABUR INDIA LIMITED",
      internshipId: "PMIS-2025-18122", 
      title: "Sales Interns",
      areaField: "Sales & Marketing",
      state: "GUJARAT",
      district: "Surat",
      benefits: "Other",
      candidatesApplied: 0,
      tag: "FMCG (Fast-Moving Consumer Goods)"
    },
    {
      company: "HONEYWELL TECHNOLOGY SOLUTIONS LAB PRIVATE LIMITED",
      internshipId: "PMIS-2025-26615",
      title: "SIOP Analyst Intern",
      areaField: "Engineering/Government",
      state: "GUJARAT",
      district: "Surat", 
      benefits: "Other",
      candidatesApplied: 0,
      recommendation: 92
    }
  ];

  return (
    <div className="flex-1 p-6">
      <Tabs defaultValue="opportunities" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="status">My Current Status</TabsTrigger>
          <TabsTrigger value="opportunities" className="bg-orange-500 text-white data-[state=active]:bg-orange-500">
            Internship Opportunities
          </TabsTrigger>
          <TabsTrigger value="internship">My Internship</TabsTrigger>
          <TabsTrigger value="events">News & Events</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="space-y-6">
          {/* Note */}
          <Card className="p-4 bg-orange-50 border-orange-200">
            <p className="text-sm text-orange-800">
              <span className="font-semibold">Note:</span> You can apply for a maximum of 3 internship IDs. 
              Applications can be modified/withdrawn until last date of filing application
            </p>
          </Card>

          {/* Filters or Ranking Preferences */}
          {!showRecommendedOnly ? (
            <div className="grid grid-cols-5 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="surat">Surat</SelectItem>
                  <SelectItem value="dinajpur">Dinajpur Dakshin</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales & Marketing</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fmcg">FMCG</SelectItem>
                  <SelectItem value="banking">Banking</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Ranking Preferences</span>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="skills">Skills</SelectItem>
                  <SelectItem value="domain">Domain</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={() => setShowRecommendedOnly(false)}
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Show All Opportunities
              </Button>
            </div>
          )}

          {/* Filter by radius */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">Filter by radius</span>
            </div>
            <div className="flex-1 max-w-md">
              <Input placeholder="Enter kms" className="w-full" />
            </div>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6"
              onClick={() => setShowRecommendedOnly(!showRecommendedOnly)}
            >
              {showRecommendedOnly ? 'Show All' : 'Your top recommendations'}
            </Button>
            <Input placeholder="Search..." className="max-w-xs" />
          </div>

          {/* Internship Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {internships
              .filter(internship => !showRecommendedOnly || internship.recommendation)
              .map((internship, index) => (
                <InternshipCard 
                  key={index} 
                  {...internship} 
                  onIncreaseMatch={() => setIsMatchModalOpen(true)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="status">
          <div className="text-center py-8">
            <p className="text-muted-foreground">My Current Status content would go here</p>
          </div>
        </TabsContent>

        <TabsContent value="internship">
          <div className="text-center py-8">
            <p className="text-muted-foreground">My Internship content would go here</p>
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="text-center py-8">
            <p className="text-muted-foreground">News & Events content would go here</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <MatchImprovementModal 
        isOpen={isMatchModalOpen} 
        onClose={() => setIsMatchModalOpen(false)} 
      />
    </div>
  );
};

export default MainContent;