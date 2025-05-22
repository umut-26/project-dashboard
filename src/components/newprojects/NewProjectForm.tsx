"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewProjectForm() {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Format date for display
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-blue-50 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto shadow-md border border-blue-100">
      <form onSubmit={handleSubmit}>
        {/* Project Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Name*
          </label>
          <Input className="w-full bg-white" required />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea className="w-full min-h-[5rem] rounded-md border px-3 py-2 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white" />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Manager
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select project manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager1">Ali Yılmaz</SelectItem>
                <SelectItem value="manager2">Ayşe Demir</SelectItem>
                <SelectItem value="manager3">Mehmet Kaya</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMMM yyyy"
                placeholderText="Select date"
                className="w-full h-9 rounded-md border px-3 py-2 pr-10 focus-visible:outline-none bg-white"
                customInput={
                  <Input
                    type="text"
                    className="w-full bg-white pr-10"
                    value={formatDate(startDate)}
                    readOnly
                  />
                }
              />
              
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <div className="relative">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd MMMM yyyy"
                placeholderText="Select date"
                className="w-full h-9 rounded-md border px-3 py-2 pr-10 focus-visible:outline-none bg-white"
                customInput={
                  <Input
                    type="text"
                    className="w-full bg-white pr-10"
                    value={formatDate(endDate)}
                    readOnly /> 
                  }
              />
            </div>
          </div>
        </div>

        {/* Status and Active Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="In Progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="inProgress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="onHold">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Active Tasks
            </label>
            <div className="h-9 px-3 py-1 rounded-md border bg-white flex items-center">
              0 / 8
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="mb-3">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Tasks
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
              {/* Task name input (2 birim genişlik) */}
              <div className="w-full sm:flex-2 sm:mr-3">
                <Input
                  placeholder="Task Name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="w-full bg-white"
                />
              </div>

              {/* Assignee select (1 birim genişlik) */}
              <div className="w-full sm:flex-1 sm:mr-1">
                <Select>
                  <SelectTrigger className="bg-white w-full">
                    <SelectValue placeholder="Select assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user1">Ahmet Yıldız</SelectItem>
                    <SelectItem value="user2">Zeynep Çelik</SelectItem>
                    <SelectItem value="user3">Can Demir</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status select (1 birim genişlik) */}
              <div className="w-full sm:flex-1 sm:ml-1">
                <Select>
                  <SelectTrigger className="bg-white w-full">
                    <SelectValue placeholder="No start" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="notStarted">No Start</SelectItem>
                    <SelectItem value="inProgress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 mt-6">
          <Button
            type="button"
            variant="outline"
            className="bg-white px-4 sm:px-6 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button type="submit" className="px-4 sm:px-6">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
