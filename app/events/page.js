"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown, X, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { events, genres } from "@/data/mockData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Decor3D from "@/components/ui/Decor3D";

function EventsContent() {
  const searchParams = useSearchParams();
  
  // States for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(false);

  // Sync with URL query params if any
  useEffect(() => {
    const search = searchParams.get("search");
    const genre = searchParams.get("genre");
    if (search) setSearchTerm(search);
    if (genre) setSelectedGenre(genre);
  }, [searchParams]);

  // Unique cities list from mock data
  const cities = ["all", "Jakarta", "Bandung"];

  // Filter and Sort logic
  const getFilteredEvents = () => {
    let list = [...events];

    // Filter by Search
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(term) ||
          e.subtitle.toLowerCase().includes(term) ||
          e.description.toLowerCase().includes(term)
      );
    }

    // Filter by Genre
    if (selectedGenre !== "all") {
      list = list.filter((e) => e.genre === selectedGenre);
    }

    // Filter by City
    if (selectedCity !== "all") {
      list = list.filter((e) => {
        const venue = e.venueId === "stadiun_siliwangi" ? "Bandung" : "Jakarta";
        return venue.toLowerCase() === selectedCity.toLowerCase();
      });
    }

    // Sorting
    if (sortBy === "price-low") {
      list.sort((a, b) => {
        const minA = Math.min(...a.ticketCategories.map((c) => c.price));
        const minB = Math.min(...b.ticketCategories.map((c) => c.price));
        return minA - minB;
      });
    } else if (sortBy === "price-high") {
      list.sort((a, b) => {
        const minA = Math.min(...a.ticketCategories.map((c) => c.price));
        const minB = Math.min(...b.ticketCategories.map((c) => c.price));
        return minB - minA;
      });
    } else if (sortBy === "date-new") {
      list.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return list;
  };

  const filteredList = getFilteredEvents();

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedGenre("all");
    setSelectedCity("all");
    setSortBy("default");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex-grow">
      {/* Header Statement */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-l-2 border-[#ccff00] pl-6 mb-12 gap-4">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-1">
            Catalog Feed
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            THE LIVE SPECTRUM
          </h1>
        </div>
        {/* Floating 3D Speaker */}
        <Decor3D type="speaker" className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search artists, venues, concerts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-900 focus:border-[#ccff00] pl-10 pr-4 py-3 text-xs font-mono text-white placeholder-zinc-700 focus:outline-none transition-colors"
          />
        </div>

        {/* Genre Selector */}
        <div className="lg:col-span-3 flex items-center bg-zinc-950 border border-zinc-900 px-3">
          <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 mr-2 flex-shrink-0" />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-transparent border-0 text-xs font-mono text-white focus:outline-none w-full py-3 cursor-pointer uppercase tracking-wider"
          >
            {genres.map((g) => (
              <option key={g.id} value={g.id} className="bg-zinc-950 text-white">
                {g.name}
              </option>
            ))}
          </select>
        </div>

        {/* City Selector */}
        <div className="lg:col-span-3 flex items-center bg-zinc-950 border border-zinc-900 px-3">
          <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 mr-2 flex-shrink-0" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-transparent border-0 text-xs font-mono text-white focus:outline-none w-full py-3 cursor-pointer uppercase tracking-wider"
          >
            {cities.map((city) => (
              <option key={city} value={city} className="bg-zinc-950 text-white">
                {city === "all" ? "All Locations" : city.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting Selector */}
        <div className="lg:col-span-2 flex items-center bg-zinc-950 border border-zinc-900 px-3">
          <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500 mr-2 flex-shrink-0" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-0 text-xs font-mono text-white focus:outline-none w-full py-3 cursor-pointer uppercase tracking-wider"
          >
            <option value="default" className="bg-zinc-950 text-white">SORT BY</option>
            <option value="price-low" className="bg-zinc-950 text-white">PRICE: LOW TO HIGH</option>
            <option value="price-high" className="bg-zinc-950 text-white">PRICE: HIGH TO LOW</option>
            <option value="date-new" className="bg-zinc-950 text-white">DATE: SOONEST</option>
          </select>
        </div>
      </div>

      {/* Active Filter Badges */}
      {(searchTerm || selectedGenre !== "all" || selectedCity !== "all" || sortBy !== "default") && (
        <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-[10px]">
          <span className="text-zinc-500 uppercase tracking-widest">Active Filters:</span>
          {searchTerm && (
            <span className="bg-zinc-950 border border-zinc-900 px-2 py-1 flex items-center gap-1.5 text-white">
              Search: "{searchTerm}"
              <X className="w-3 h-3 text-[#ff0055] cursor-pointer" onClick={() => setSearchTerm("")} />
            </span>
          )}
          {selectedGenre !== "all" && (
            <span className="bg-zinc-950 border border-zinc-900 px-2 py-1 flex items-center gap-1.5 text-[#ccff00]">
              Genre: {selectedGenre.toUpperCase()}
              <X className="w-3 h-3 text-[#ff0055] cursor-pointer" onClick={() => setSelectedGenre("all")} />
            </span>
          )}
          {selectedCity !== "all" && (
            <span className="bg-zinc-950 border border-zinc-900 px-2 py-1 flex items-center gap-1.5 text-[#00f0ff]">
              City: {selectedCity.toUpperCase()}
              <X className="w-3 h-3 text-[#ff0055] cursor-pointer" onClick={() => setSelectedCity("all")} />
            </span>
          )}
          {sortBy !== "default" && (
            <span className="bg-zinc-950 border border-zinc-900 px-2 py-1 flex items-center gap-1.5 text-[#ff0055]">
              Sorted
              <X className="w-3 h-3 text-[#ff0055] cursor-pointer" onClick={() => setSortBy("default")} />
            </span>
          )}
          <button
            onClick={handleClearFilters}
            className="text-zinc-400 hover:text-white underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Events Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-24">
          <Loader2 className="w-8 h-8 text-[#ccff00] animate-spin" />
        </div>
      ) : filteredList.length > 0 ? (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredList.map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
              }}
            >
              <Card event={event} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Styled Custom Empty State */
        <div className="border border-zinc-900 bg-zinc-950/40 p-16 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm font-black text-zinc-600 text-lg">
            ?
          </div>
          <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
            No Concerts Match Criteria
          </h3>
          <p className="font-mono text-xs text-zinc-500 max-w-sm leading-relaxed">
            We couldn't find any upcoming shows matching your current query. Try adjusting your location, genre, or keywords.
          </p>
          <Button variant="outline" size="sm" onClick={handleClearFilters} className="mt-2">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center py-24">
        <Loader2 className="w-8 h-8 text-[#ccff00] animate-spin" />
      </div>
    }>
      <EventsContent />
    </Suspense>
  );
}
