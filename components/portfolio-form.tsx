"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, X } from "lucide-react"

export function PortfolioForm() {
  const [activeTab, setActiveTab] = useState("personal")

  // Personal information state
  const [personal, setPersonal] = useState({
    name: "",
    title: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    website: "",
  })

  // Experience state
  const [experiences, setExperiences] = useState<
    Array<{
      company: string
      position: string
      duration: string
      description: string
    }>
  >([{ company: "", position: "", duration: "", description: "" }])

  // Skills state
  const [skillInput, setSkillInput] = useState("")
  const [skills, setSkills] = useState<string[]>([])

  // Education state
  const [education, setEducation] = useState<
    Array<{
      institution: string
      degree: string
      year: string
    }>
  >([{ institution: "", degree: "", year: "" }])

  // Handle personal info changes
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPersonal((prev) => ({ ...prev, [name]: value }))

    // Update the portfolio display
    if (document.getElementById("about-content")) {
      const aboutContent = document.getElementById("about-content")
      if (aboutContent) {
        aboutContent.innerHTML = `
          <h3 class="text-xl font-semibold">${personal.name || "Your Name"}</h3>
          <p class="text-lg text-muted-foreground">${personal.title || "Your Title"}</p>
          <p class="mt-2">${personal.bio || "Your bio will appear here."}</p>
        `
      }

      const contactContent = document.getElementById("contact-content")
      if (contactContent) {
        contactContent.innerHTML = `
          <p><strong>Email:</strong> ${personal.email || "Your email"}</p>
          <p><strong>Phone:</strong> ${personal.phone || "Your phone"}</p>
          <p><strong>Location:</strong> ${personal.location || "Your location"}</p>
          ${personal.website ? `<p><strong>Website:</strong> ${personal.website}</p>` : ""}
        `
      }
    }
  }

  // Handle experience changes
  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newExperiences = [...experiences]
    newExperiences[index] = { ...newExperiences[index], [name]: value }
    setExperiences(newExperiences)

    // Update the portfolio display
    const experienceContent = document.getElementById("experience-content")
    if (experienceContent) {
      experienceContent.innerHTML = experiences
        .map(
          (exp) => `
        <div class="mb-4 pb-4 border-b last:border-0">
          <h3 class="text-lg font-semibold">${exp.position || "Position"}</h3>
          <p class="text-muted-foreground">${exp.company || "Company"} | ${exp.duration || "Duration"}</p>
          <p class="mt-2">${exp.description || "Description"}</p>
        </div>
      `,
        )
        .join("")
    }
  }

  // Add new experience field
  const addExperience = () => {
    setExperiences([...experiences, { company: "", position: "", duration: "", description: "" }])
  }

  // Remove experience field
  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      const newExperiences = [...experiences]
      newExperiences.splice(index, 1)
      setExperiences(newExperiences)
    }
  }

  // Handle adding skills
  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      const newSkills = [...skills, skillInput.trim()]
      setSkills(newSkills)
      setSkillInput("")

      // Update the portfolio display
      const skillsContent = document.getElementById("skills-content")
      if (skillsContent) {
        skillsContent.innerHTML = `
          <div class="flex flex-wrap gap-2">
            ${newSkills.map((skill) => `<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">${skill}</span>`).join("")}
          </div>
        `
      }
    }
  }

  // Remove a skill
  const removeSkill = (skillToRemove: string) => {
    const newSkills = skills.filter((skill) => skill !== skillToRemove)
    setSkills(newSkills)

    // Update the portfolio display
    const skillsContent = document.getElementById("skills-content")
    if (skillsContent) {
      skillsContent.innerHTML = `
        <div class="flex flex-wrap gap-2">
          ${newSkills.map((skill) => `<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">${skill}</span>`).join("")}
        </div>
      `
    }
  }

  // Handle education changes
  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newEducation = [...education]
    newEducation[index] = { ...newEducation[index], [name]: value }
    setEducation(newEducation)

    // Update the portfolio display
    const educationContent = document.getElementById("education-content")
    if (educationContent) {
      educationContent.innerHTML = education
        .map(
          (edu) => `
        <div class="mb-4 pb-4 border-b last:border-0">
          <h3 class="text-lg font-semibold">${edu.institution || "Institution"}</h3>
          <p class="text-muted-foreground">${edu.degree || "Degree"} | ${edu.year || "Year"}</p>
        </div>
      `,
        )
        .join("")
    }
  }

  // Add new education field
  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", year: "" }])
  }

  // Remove education field
  const removeEducation = (index: number) => {
    if (education.length > 1) {
      const newEducation = [...education]
      newEducation.splice(index, 1)
      setEducation(newEducation)
    }
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>

      <TabsContent value="personal" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" value={personal.name} onChange={handlePersonalChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Software Engineer"
            value={personal.title}
            onChange={handlePersonalChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Write a short bio about yourself"
            value={personal.bio}
            onChange={handlePersonalChange}
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={personal.email}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={personal.phone}
              onChange={handlePersonalChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="New York, NY"
              value={personal.location}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website (optional)</Label>
            <Input
              id="website"
              name="website"
              placeholder="https://yourwebsite.com"
              value={personal.website}
              onChange={handlePersonalChange}
            />
          </div>
        </div>

        <Button onClick={() => setActiveTab("experience")}>Next: Experience</Button>
      </TabsContent>

      <TabsContent value="experience" className="space-y-4 pt-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Experience {index + 1}</h3>
              {experiences.length > 1 && (
                <Button variant="ghost" size="sm" onClick={() => removeExperience(index)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    name="company"
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`position-${index}`}>Position</Label>
                  <Input
                    id={`position-${index}`}
                    name="position"
                    placeholder="Job Title"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`duration-${index}`}>Duration</Label>
                <Input
                  id={`duration-${index}`}
                  name="duration"
                  placeholder="Jan 2020 - Present"
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  name="description"
                  placeholder="Describe your responsibilities and achievements"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, e)}
                  rows={3}
                />
              </div>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addExperience} className="w-full">
          <Plus className="h-4 w-4 mr-2" /> Add Another Experience
        </Button>

        <div className="flex justify-between pt-2">
          <Button variant="outline" onClick={() => setActiveTab("personal")}>
            Previous: Personal
          </Button>
          <Button onClick={() => setActiveTab("skills")}>Next: Skills</Button>
        </div>
      </TabsContent>

      <TabsContent value="skills" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="skill">Add Skills</Label>
          <div className="flex gap-2">
            <Input
              id="skill"
              placeholder="e.g. JavaScript"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  addSkill()
                }
              }}
            />
            <Button onClick={addSkill}>Add</Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="px-3 py-1">
              {skill}
              <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-2" onClick={() => removeSkill(skill)}>
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          {skills.length === 0 && (
            <p className="text-sm text-muted-foreground">No skills added yet. Add some skills above.</p>
          )}
        </div>

        <div className="flex justify-between pt-2">
          <Button variant="outline" onClick={() => setActiveTab("experience")}>
            Previous: Experience
          </Button>
          <Button onClick={() => setActiveTab("education")}>Next: Education</Button>
        </div>
      </TabsContent>

      <TabsContent value="education" className="space-y-4 pt-4">
        {education.map((edu, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Education {index + 1}</h3>
              {education.length > 1 && (
                <Button variant="ghost" size="sm" onClick={() => removeEducation(index)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input
                  id={`institution-${index}`}
                  name="institution"
                  placeholder="University Name"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`degree-${index}`}>Degree</Label>
                  <Input
                    id={`degree-${index}`}
                    name="degree"
                    placeholder="Bachelor of Science"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`year-${index}`}>Year</Label>
                  <Input
                    id={`year-${index}`}
                    name="year"
                    placeholder="2015 - 2019"
                    value={edu.year}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addEducation} className="w-full">
          <Plus className="h-4 w-4 mr-2" /> Add Another Education
        </Button>

        <div className="flex justify-between pt-2">
          <Button variant="outline" onClick={() => setActiveTab("skills")}>
            Previous: Skills
          </Button>
          <Button
            variant="default"
            onClick={() => {
              // Final update of all sections
              alert("Portfolio updated successfully!")
            }}
          >
            Save Portfolio
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

