"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Users, Calendar, Hotel, Sun, Music, Wine } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

const hotelRates = {
  '3-star': { 
    regular: { base: 10000, food: 1200 },
    peak: { base: 15000, food: 1500 }
  },
  '4-star': { 
    regular: { base: 15000, food: 1500 },
    peak: { base: 20000, food: 2500 }
  },
  '5-star': { 
    regular: { base: 25000, food: 2500 },
    peak: { base: 50000, food: 5000 }
  }
};

type HotelTier = '3-star' | '4-star' | '5-star';

export function WeddingCostCalculator() {
  const [guests, setGuests] = useState(100)
  const [days, setDays] = useState(2)
  const [hotelTier, setHotelTier] = useState<HotelTier>('5-star')
  const [isPeakSeason, setIsPeakSeason] = useState(true)
  const [includeEntertainment, setIncludeEntertainment] = useState(true)
  const [includeAlcohol, setIncludeAlcohol] = useState(true)
  const [costs, setCosts] = useState({
    accommodation: 0,
    food: 0,
    venue: 0,
    entertainment: 0,
    alcohol: 0,
    total: 0
  })
  const [roomsRequired, setRoomsRequired] = useState(0)
  const [ratePerNight, setRatePerNight] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      const roomsNeeded = Math.ceil(guests / 2);
      const seasonType = isPeakSeason ? 'peak' : 'regular';
      const selectedRate = hotelRates[hotelTier][seasonType];
      
      const accommodation = roomsNeeded * selectedRate.base * days;
      const foodCost = guests * selectedRate.food * days * 2;
      const entertainmentCost = includeEntertainment ? 250000 : 0;
      const alcoholCost = includeAlcohol ? 300000 : 0;
      const venuePerDay = hotelTier === '5-star' ? 200000 : 
                          hotelTier === '4-star' ? 100000 : 45000;
      const venueCost = venuePerDay * days;

      const total = accommodation + foodCost + venueCost + entertainmentCost + alcoholCost;

      setCosts({
        accommodation,
        food: foodCost,
        venue: venueCost,
        entertainment: entertainmentCost,
        alcohol: alcoholCost,
        total
      });
      setRoomsRequired(roomsNeeded);
      setRatePerNight(selectedRate.base);
    };

    calculateTotal();
  }, [guests, days, hotelTier, isPeakSeason, includeEntertainment, includeAlcohol]);

  const ServiceToggle = ({ 
    label, 
    icon: Icon, 
    isActive, 
    onClick 
  }: { 
    label: string; 
    icon: any; 
    isActive: boolean; 
    onClick: () => void;
  }) => (
    <div className="flex items-center justify-between p-4 bg-[#F8F9FC] rounded-lg">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-[#67008F]" />
        <span className="text-gray-900">{label}</span>
      </div>
      <Switch
        checked={isActive}
        onCheckedChange={onClick}
        className="data-[state=checked]:bg-[#67008F]"
      />
    </div>
  );

  return (
    <section className="bg-[#FFFCF7] py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="space-y-8">
            <div>
              <Heart className="w-8 h-8 text-[#67008F] mb-3" />
              <h2 className="text-3xl font-bold text-[#67008F]">Wedding Cost Calculator</h2>
              <p className="text-gray-600 mt-1">Plan your dream wedding in Goa</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Essential Details</h3>
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#67008F]" />
                      <span className="text-gray-900">Guests</span>
                    </div>
                    <span className="font-medium">{guests}</span>
                  </div>
                  <Slider
                    min={50}
                    max={500}
                    step={10}
                    value={[guests]}
                    onValueChange={(value) => setGuests(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>50</span>
                    <span>500</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#67008F]" />
                      <span className="text-gray-900">Days</span>
                    </div>
                    <span className="font-medium">{days}</span>
                  </div>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={[days]}
                    onValueChange={(value) => setDays(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1</span>
                    <span>5</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-[#67008F]" />
                    <span className="text-gray-900">Hotel Category</span>
                  </div>
                  <div className="flex gap-2">
                    {(['3-star', '4-star', '5-star'] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setHotelTier(tier)}
                        className={cn(
                          "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors",
                          hotelTier === tier
                            ? "bg-[#67008F] text-white"
                            : "bg-[#F8F9FC] text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <ServiceToggle
                  label="Peak Season (Nov to Feb)"
                  icon={Sun}
                  isActive={isPeakSeason}
                  onClick={() => setIsPeakSeason(!isPeakSeason)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Services</h3>
              <div className="grid grid-cols-2 gap-3">
                <ServiceToggle
                  label="Entertainment"
                  icon={Music}
                  isActive={includeEntertainment}
                  onClick={() => setIncludeEntertainment(!includeEntertainment)}
                />
                <ServiceToggle
                  label="Bar Service"
                  icon={Wine}
                  isActive={includeAlcohol}
                  onClick={() => setIncludeAlcohol(!includeAlcohol)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#67008F] text-white p-6 rounded-lg text-center space-y-2">
                <h4 className="text-lg">Total Estimate*</h4>
                <p className="text-5xl font-bold">₹{costs.total.toLocaleString()}</p>
                <p className="text-sm opacity-80">*Additional decoration costs: ₹1L - ₹20L+ depending on design</p>
              </div>

              <div className="bg-[#F8F9FC] rounded-lg p-4 space-y-3">
                <h5 className="font-semibold text-lg mb-2">Cost Breakdown</h5>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Accommodation</p>
                    <p className="font-semibold">₹{costs.accommodation.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Food & Dining</p>
                    <p className="font-semibold">₹{costs.food.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Venue Charges</p>
                    <p className="font-semibold">₹{costs.venue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Entertainment</p>
                    <p className="font-semibold">₹{costs.entertainment.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Bar Service</p>
                    <p className="font-semibold">₹{costs.alcohol.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Room Rate (with meals)</p>
                  <p className="font-semibold">₹{ratePerNight.toLocaleString()} per night</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Rooms Required</p>
                  <p className="font-semibold">{roomsRequired} rooms</p>
                </div>
              </div>

              <Button className="w-full bg-[#67008F] hover:bg-[#67008F]/90 text-white py-2 text-base font-semibold">
                Get Your Detailed Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

