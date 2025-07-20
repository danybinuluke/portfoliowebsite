'use client';

import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { projects } from '@/constants';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';

const ProjectPage = () => {
  // State to manage which tab is active: 'completed' or 'ongoing'
  const [activeTab, setActiveTab] = useState('completed');

  // Filter projects based on status. `useMemo` prevents re-filtering on every render.
  const filteredProjects = useMemo(
    () => projects?.filter((project) => project.status === activeTab),
    [activeTab] // This will only re-run when activeTab changes
  );

  return (
    <Container className="py-5 md:py-10 mb-28 md:mb-10">
      {/* Tab Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          onClick={() => setActiveTab('completed')}
          variant={activeTab === 'completed' ? 'default' : 'outline'}
          className={`
            px-6 py-2 rounded-md transition-all duration-300
            ${
              activeTab === 'completed'
                ? 'bg-hoverColor text-white border-hoverColor'
                : 'bg-transparent text-white/70 border-lightSky/20 hover:bg-lightSky/10 hover:text-white'
            }
          `}
        >
          Completed
        </Button>
        <Button
          onClick={() => setActiveTab('ongoing')}
          variant={activeTab === 'ongoing' ? 'default' : 'outline'}
          className={`
            px-6 py-2 rounded-md transition-all duration-300
            ${
              activeTab === 'ongoing'
                ? 'bg-hoverColor text-white border-hoverColor'
                : 'bg-transparent text-white/70 border-lightSky/20 hover:bg-lightSky/10 hover:text-white'
            }
          `}
        >
          Ongoing
        </Button>
      </div>

      {/* Conditionally Rendered Carousel */}
      <Carousel
        // Add a key to force re-mount the carousel on tab change, resetting its position
        key={activeTab}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent className="overflow-visible">
          {filteredProjects?.map((project) => (
            <CarouselItem key={project?.id} className="overflow-visible">
              <Card className="bg-bodyColor border-lightSky/20 text-white group overflow-visible">
                <CardContent className="p-6 overflow-visible">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8 relative">
                    <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                      <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                        <h2 className="text-4xl md:text-8xl text-outline font-extrabold text-transparent leading-none group-hover:text-outline-hover hoverEffect">
                          {project?.id}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold leading-none text-white">
                          {project?.title}
                        </h3>
                        <p className="text-white/60 text-sm md:text-base">
                          {project?.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 md:gap-4 items-center relative z-10">
                          {project?.stack?.map((item, index) => (
                            <li
                              key={index}
                              className="text-xs md:text-base text-lightSky"
                            >
                              {item}
                              {index !== project?.stack?.length - 1 && ','}
                            </li>
                          ))}
                        </ul>
                        <Separator className="bg-gray-700" />
                        <div className="flex items-center gap-4 relative z-50">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={project?.liveUrl ?? '/'}
                                  target="_blank"
                                >
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <ArrowUpRight />
                                    <span className="sr-only">
                                      View Live Project
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="top" sideOffset={8}>
                                View Live Project
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={project?.githubUrl ?? '/'}
                                  target="_blank"
                                >
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Github />
                                    <span className="sr-only">
                                      View GitHub Repo
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="top" sideOffset={8}>
                                View GitHub Repository
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <div className="rounded-lg overflow-hidden w-full h-auto">
                        <Image
                          src={project?.image}
                          alt={project?.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-12 md:right-10 -bottom-8">
          <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
        </div>
      </Carousel>
    </Container>
  );
};

export default ProjectPage;