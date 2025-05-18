'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Code2, GraduationCap, User } from "lucide-react";
import { tabContent } from '@/constants';

const tabMenu = [
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About Me", value: "about", icon: User },
];

const ResumePage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (value: string) => {
    if (value === "skills") {
      router.push("/skills");
    } else {
      setActiveTab(value);
    }
  };

  return (
    <div className="py-5 md:py-10">
      <Container>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor rounded-md hover:bg-lightSky/50 text-xs sm:text-sm flex items-center gap-2 justify-start"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  <span>{item.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky">
                {tabContent?.education?.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.education?.content?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border rounded-lg border-lightSky/20 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold">{item?.title}</h3>
                        <p className="text-white/40">{item?.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-14 h-14 object-contain"
                          />
                        </a>
                        <div className="flex items-center text-white/40 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span className="ml-1">{item?.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-2 tracking-tight text-white/80">
                      {item?.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">Skills</TabsContent>
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent?.about?.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border rounded-lg border-lightSky/20 p-6 space-y-6">
                <p className="tracking-tight text-white/80">
                  {tabContent?.about?.bio}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {tabContent?.about?.interests?.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-black ring-1 ring-white/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {tabContent?.about?.languages?.map((lang, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-black ring-1 ring-white/20"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default ResumePage;
